import React, { InputHTMLAttributes } from "react";

const TextInput = ({ name, type, inpProps }: { name: string, type?: string, inpProps?: InputHTMLAttributes<HTMLInputElement> }) => {
    return (
        <div>
            <div className="relative my-2">
                <input
                    required
                    name={name}
                    type={type || "number"}
                    id="outlined_success"
                    aria-describedby="outlined_success_help"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-md border-2 border-gray-600 appearance-none dark:text-white dark:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder={name}
                    {...inpProps}
                />
                <label
                    htmlFor="outlined_success"
                    className="absolute text-sm text-gray-600 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto rounded-xl"
                >
                    {name}
                </label>
            </div>
            {/* <p id="outlined_success_help" className="mt-2 text-xs text-gray-600 dark:text-gray-400"><span className="font-medium">Well done!</span> Some success message.</p> */}
        </div>
    );
};

export default TextInput;
