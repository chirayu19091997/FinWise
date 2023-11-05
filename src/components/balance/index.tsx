import React from 'react'
import { balanceData1, balanceData2, data } from '@/utils/constants'
import Table from '../newTable'

interface BalanceAccountProps {
    name: string,
    date: string,
    creditTxns: any,
    DebitTxns: any
}

const BalanceAccount = ({ name, date, creditTxns, DebitTxns }: BalanceAccountProps) => {
    return (
        <div>
            {name || "USERNAME"}
            <h1>CapitalAccount For Year Ending on {date || "date"}</h1>
            <div className='flex justify-center my-2 border rounded-lg p-4 divide-x '>
                <Table data={balanceData1} />
                <Table data={balanceData2} />
            </div>
        </div>
    )
}

export default BalanceAccount