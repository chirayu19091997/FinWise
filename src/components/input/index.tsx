import { prisma } from '@/db'
import { fixedIncomeInputs, fixedIntrestInputs } from '@/utils/constants'
import { auth } from '@clerk/nextjs/server'
import React from 'react'
async function createTodo(data: FormData) {
    "use server"
    const { userId } = auth()
    const value = Object.fromEntries(data.entries());
    [...fixedIncomeInputs, ...fixedIntrestInputs].map((x, i) => {
        value[x] = parseFloat("" + value[x])
    })
    const user = await prisma.user.findUnique({ where: { clerkId: userId || "" } })
    const income = await prisma.income.upsert({
        where: {
            userId: user?.id
        },
        create: {
            userId: user?.id,
            salary: value.Salary || 0,
            business: value.Business || 0,
            other: value.Other || 0
        },
        update: {
            salary: value.Salary || 0,
            business: value.Business || 0,
            other: value.Other || 0
        }
    })
    const intrest = await prisma.intrests.upsert({
        where: {
            userId: user?.id
        },
        create: {
            userId: user?.id,
            bankAccount: value.bankAccount || 0,
            fdAccount: value.fdAccount || 0,
            otherAccount: value.otherAccount || 0
        },
        update: {
            bankAccount: value.bankAccount || 0,
            fdAccount: value.fdAccount || 0,
            otherAccount: value.otherAccount || 0
        },

    })
}
function Index() {
    return (
        <form action={createTodo} className='flex flex-col gap-2 rounded p-4 border'>
            <h1 className='w-full text-center'> Tell details</h1>
            {[...fixedIncomeInputs, ...fixedIntrestInputs].map((x, i) => (
                <div key={i} className='border-b p-2 flex items-center justify-between gap-4'>
                    <p className=''>
                        {x}
                    </p>
                    <input required name={x} type='number' className='border'></input>
                </div>
            ))}
            <button type='submit' className='p-2 border'>
                Submit
            </button>
        </form>
    )
}

export default Index