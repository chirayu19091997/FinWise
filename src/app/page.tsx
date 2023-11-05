import CapitalAccount from "@/components/CapitalAccount/CapitalAccount";
import BalanceAccount from "@/components/balance";
import Page from "./dashboard/page";
import Index from "@/components/input";

export default function Home() {
  return (
    <div className="p-8 flex">

      <Index />
    </div>
    // <main className="flex min-h-screen p-8">
    //   <BalanceAccount name={""} date={""} creditTxns={undefined} DebitTxns={undefined} />
    // </main>
  )
}
