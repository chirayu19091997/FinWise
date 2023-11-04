import React from 'react'
import Table from '../Table'

interface CapitalAccountProps {
    name: string,
    date: string,
    creditTxns: any,
    DebitTxns: any
}

const CapitalAccount = ({ name, date, creditTxns, DebitTxns }: CapitalAccountProps) => {
    return (
        <div>
            {name || "USERNAME"}
            <h1>CapitalAccount For Year Ending on {date || "date"}</h1>
            <div className='flex justify-center items-center my-2 border rounded-lg p-4 divide-x'>
                <Table type="Cr" data={[{ name: 'Drawings', amount: 4000 }, { name: 'Drawings', amount: 4000 }, { name: 'Drawings', amount: 4000 }]} />
                <Table type="Dr" data={[{ name: 'Drawings', amount: 4000 }, { name: 'Drawings', amount: 4000 }, { name: 'Drawings', amount: 4000 }]} />
            </div>
        </div>
    )
}

export default CapitalAccount