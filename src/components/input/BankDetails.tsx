"use client";
import { getBlankBank } from "@/utils/constants";
import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import { prisma } from "@/db";
import { auth } from "@clerk/nextjs";
import { addBankDetails } from "./bdservice";
const BankDetails = () => {
  const [bankDetails, setBankDetails] = useState([getBlankBank()]);

  const updateData = (text: string, i: number, bitem: string) => {
    const temp = bankDetails;
    temp[i][bitem] = text;
    setBankDetails(temp);
  };

  return (
    <div className="flex flex-col gap-2 px-4 ">
      <div className="grid md:grid-cols-4 md:gap-6">
        {bankDetails.map((bank, i) => (
          <>
            {Object.keys(bank).map((bitem: string, bidx: number) =>
              bitem !== "id" ? (
                <TextInput
                  key={`${bitem}-${bidx}`}
                  name={bitem}
                  type={bitem == "Balance" ? "number" : "text"}
                  inpProps={{
                    required: false,
                    onChange: (e: any) => updateData(e.target.value, i, bitem),
                  }}
                />
              ) : (
                <></>
              )
            )}
            <div className="w-full flex justify-end items-center">
              {i + 1 == bankDetails.length && (
                <div
                  className="flex text-center items-center justify-center text-2xl bg-blue-500 rounded-full border-2 w-[4rem] h-[3rem] text-white"
                  onClick={() =>
                    setBankDetails([...bankDetails, getBlankBank()])
                  }
                >
                  +
                </div>
              )}
              {bankDetails.length > 1 && (
                <div
                  className="flex text-center items-center justify-center text-2xl bg-red-500 rounded-full border-2 w-[4rem] h-[3rem] text-white"
                  onClick={() =>
                    setBankDetails(
                      bankDetails.filter((bd) => bd.id !== bank.id)
                    )
                  }
                >
                  x
                </div>
              )}
            </div>
          </>
        ))}
      </div>
      <button
        onClick={() => addBankDetails(bankDetails)}
        className="text-white my-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save Bank Details
      </button>
    </div>
  );
};

export default BankDetails;
