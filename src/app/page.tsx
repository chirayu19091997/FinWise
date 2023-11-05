import CapitalAccount from "@/components/CapitalAccount/CapitalAccount";
import BalanceAccount from "@/components/balance";
import Page from "./dashboard/page";
import Index from "@/components/input";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex min-h-screen p-8">
      <BalanceAccount name={user?.firstName + " " + user?.lastName || ""} date={""} creditTxns={undefined} DebitTxns={undefined} />
    </main>
  )
}
