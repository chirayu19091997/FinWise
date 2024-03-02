import React from 'react'

const HeaderText = ({ text }: { text: string }) => {
    return (
        <div className='w-48 text-center mx-auto my-4'>
            <h1>{text}</h1>
            <hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
        </div>

    )
}

export default HeaderText