import { prisma } from "@/db";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from 'react'
import Index from "@/components/input";
const fetchUserDetails = async () => {
    const { userId } = auth();
    if (!userId) {
        redirect("/");
    }
    const user = await currentUser();
    const existUser = await prisma.user.findFirst({ where: { clerkId: userId } });
    if (!existUser) {
        await prisma.user.create({
            data: {
                clerkId: userId,
                name: "" + user?.firstName + " " + user?.lastName,
            },
        });
    }
    return await prisma.user.findFirst({ where: { clerkId: userId } });
};
const AddIncome = async () => {
    const x = await fetchUserDetails();
    return (
        <>
            <Index />
        </>
    )
}

export default AddIncome