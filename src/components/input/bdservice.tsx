"use server";
import { prisma } from "@/db";

export const addBankDetails = async (bankDetails: any) => {
  // const { userId } = auth()
  // const user = await prisma.user.findUnique({ where: { clerkId: userId || "" } })
  const userId = "6546ea162eecb74e08a3f96e";
  console.log(bankDetails);
  const details = bankDetails.map((b: any) => {
    if (b.bankAccount !== "") {
      return {
        accNo: b.bankAccount,
        ifsc: b.IFSC,
        balance: parseFloat(b.Balance),
        userId: userId,
      };
    }
  });
  await prisma.bankAccounts.createMany({
    data: details,
  });
};
