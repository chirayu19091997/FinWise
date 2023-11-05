import { prisma } from "@/db";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const fetchUserDetails = async () => {
    const { userId } = auth();
    if (!userId) {
        redirect("/")
    }
    const user = await currentUser();
    const existUser = await prisma.user.findFirst({ where: { clerkId: userId } })
    if (!existUser) {
        await prisma.user.create({
            data: {
                clerkId: userId,
                name: "" + user?.firstName + " " + user?.lastName,
            }
        })
    }
    return await prisma.user.findFirst({ where: { clerkId: userId } })
}
const Page = async () => {
    const x = await fetchUserDetails()
    console.log(x)
    return <h1>hi</h1>
}
export default Page