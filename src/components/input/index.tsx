import { prisma } from "@/db";
import { fixedIncomeInputs, fixedIntrestInputs } from "@/utils/constants";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import TextInput from "./TextInput";
import HeaderText from "./HeaderText";
import BankDetails from "./BankDetails";
async function createTodo(data: FormData) {
  "use server";
  const { userId } = auth();
  const user = await prisma.user.findUnique({
    where: { clerkId: userId || "" },
  });
  const value = Object.fromEntries(data.entries());
  const obj = JSON.parse(JSON.stringify(value));
  const arr = [...fixedIncomeInputs, ...fixedIntrestInputs];
  arr.map((x: string | number) => {
    obj[x] = parseFloat("" + obj[x]);
  });
  console.log(obj);

  const income = await prisma.income.upsert({
    where: {
      userId: user?.id,
    },
    create: {
      userId: user?.id || "",
      salary: obj.Salary || 0,
      business: obj.Business || 0,
      other: obj.Other || 0,
    },
    update: {
      salary: obj.Salary || 0,
      business: obj.Business || 0,
      other: obj.Other || 0,
    },
  });
  const intrest = await prisma.intrests.upsert({
    where: {
      userId: user?.id,
    },
    create: {
      userId: user?.id || "",
      bankAccount: obj.bankAccount || 0,
      fdAccount: obj.fdAccount || 0,
      otherAccount: obj.otherAccount || 0,
    },
    update: {
      bankAccount: obj.bankAccount || 0,
      fdAccount: obj.fdAccount || 0,
      otherAccount: obj.otherAccount || 0,
    },
  });
}
function Index() {
  return (
    <div>
      <form action={createTodo} className="flex flex-col gap-2 rounded p-4">
        <HeaderText text="Income Details" />
        <div className="grid md:grid-cols-5 md:gap-6">
          {fixedIncomeInputs.map((x, i) => (
            <TextInput key={`${x}-${i}`} name={x} />
          ))}
        </div>
        <HeaderText text="Interest Details" />
        <div className="grid md:grid-cols-5 md:gap-6">
          {fixedIntrestInputs.map((x, i) => (
            <TextInput key={`${x}-${i}`} name={x} />
          ))}
        </div>
        <button
          type="submit"
          className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
      <HeaderText text="Bank Balance on 31 Mar" />
      <BankDetails />
    </div>
  );
}

export default Index;
