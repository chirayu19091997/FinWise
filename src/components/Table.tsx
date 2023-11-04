import React from 'react'

const Table = ({ data, type }: any) => {
    return (
        <div className="relative overflow-x-auto px-2">
            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-l-lg">
                            Particulars
                        </th>
                        <th scope="col" className="px-6 py-3 rounded-r-lg">
                            Price ({type})
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any, index: number) =>
                        <tr className="bg-white" key={`${item.name}-${index}`}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.amount}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr className="font-semibold text-gray-900 ">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-3">{data.reduce((a: any, b: any) => a + b.amount, 0)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table