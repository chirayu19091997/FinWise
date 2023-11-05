import React from 'react'
import { prisma } from '@/db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Table from '../newTable'

interface CapitalAccountProps {
    name: string,
    date: string,
    creditTxns: any,
    DebitTxns: any
}
const fetchIncome = async () => {
    const { userId } = auth();
    if (!userId) {
        redirect("/dashboard")
    }
    const user = await prisma.user.findUnique({ where: { clerkId: userId || "" } })
    const income = await prisma.income.findUnique({ where: { userId: user?.id } });
    console.log(income);
    const data = {
        default: [
            { name: 'By Opening Balance', amount: 10 },
            { name: 'By Business Income', amount: income?.business },
            { name: 'By Other Income', amount: income?.other },
            { name: 'By Salary Income', amount: income?.salary },
        ]
    }
    return data
}
const CapitalAccount = async ({ name, date, creditTxns, DebitTxns }: CapitalAccountProps) => {
    const creditData = await fetchIncome();
    return (
        <div>
            {name || "USERNAME"}
            <h1>CapitalAccount For Year Ending on {date || "date"}</h1>
            <div className='flex justify-center items-center my-2 border rounded-lg p-4 divide-x'>
                <Table type="Dr" data={{ default: [{ name: 'Drawings', amount: 4000 }, { name: 'Drawings', amount: 4000 }, { name: 'Drawings', amount: 4000 }] }} />
                <Table type="Cr" data={creditData} />
            </div>
        </div>
    )
}

export default CapitalAccount