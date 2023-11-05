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
                            Amount {type && <span className={`${type == "Cr" ? "text-green-600" : "text-red-600"}`}>({type})</span>}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {Object.keys(data).map((key, i) => (key !== "default" && <tr key={i}>{key}</tr>))} */}
                    {Object.keys(data).map((keyy, i) => (
                        <>
                            {keyy !== "default" && <tr className='bg-white' key={i}><th className='px-6 py-4 font-bold text-gray-900 whitespace-nowrap underline'>{keyy}</th></tr>}
                            {data[keyy].map((item: any, index: number) =>
                                <tr className="bg-white" key={`${item.name}-${index}`}>
                                    <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-2">
                                        {item.amount}
                                    </td>
                                </tr>
                            )}
                        </>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="font-semibold text-gray-900 ">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        <td className="px-6 py-3">
                            {Object.keys(data).reduce((acc, val) => {
                                const x = data[val].reduce((a: any, b: any) => a + b.amount, 0)
                                return acc + x
                            }, 0)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Table