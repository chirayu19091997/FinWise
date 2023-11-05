import React from 'react'

const Table = ({ data, type }: any) => {
    return (
        <div className="relative overflow-x-auto px-2 w-[20rem]">
            <div className="w-full  text-sm text-left text-gray-500 flex flex-col justify-between">
                <div>
                    <div className="text-xs text-gray-700 uppercase bg-gray-100 rounded-md">
                        <div className='flex justify-between items-center gap-8'>
                            <div className="px-6 py-3 rounded-l-lg font-semibold">
                                Particulars
                            </div>
                            <div className="px-6 py-3 rounded-r-lg font-semibold">
                                Amount {type && <span className={`${type == "Cr" ? "text-green-600" : "text-red-600"}`}>({type})</span>}
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[17rem] overflow-y-auto py-2'>
                        {/* {Object.keys(data).map((key, i) => (key !== "default" && <div key={i}>{key}</div>))} */}
                        {Object.keys(data).map((keyy, i) => (
                            <>
                                {keyy !== "default" && <div className='bg-white' key={i}><div className='px-6 py-4 font-bold text-gray-900 whitespace-nowrap underline'>{keyy}</div></div>}
                                {data[keyy].map((item: any, index: number) =>
                                    <div className="bg-white flex justify-between items-center gap-8" key={`${item.name}-${index}`}>
                                        <div className="px-6 w-1/2 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                            {item.name}
                                        </div>
                                        <div className="px-6 py-2 w-1/2">
                                            {item.amount}
                                        </div>
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-gray-900 flex justify-between items-center gap-8 bg-gray-100 rounded-md">
                        <div className="px-6 py-3 text-base w-1/2">Total</div>
                        <div className="px-6 py-3 w-1/2">
                            {Object.keys(data).reduce((acc, val) => {
                                const x = data[val].reduce((a: any, b: any) => a + b.amount, 0)
                                return acc + x
                            }, 0)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table