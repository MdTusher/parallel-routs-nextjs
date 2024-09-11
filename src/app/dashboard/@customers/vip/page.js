import MatrixList from "@/app/components/MatrixList";
import Link from "next/link";
const vipCustomerData = [
  {
    id: 1,
    name: "Jessica Martinez",
    value: 12345,
  },
  {
    id: 2,
    name: "Michael Thompson",
    value: 67890,
  },
  {
    id: 3,
    name: "Sarah Wilson",
    value: 23456,
  },
  {
    id: 4,
    name: "Daniel Brown",
    value: 34567,
  },
  {
    id: 5,
    name: "Olivia Garcia",
    value: 45678,
  },
];
const Vip = () => {
  return (
    <div className="w-full max-w-xl px-2 pb-2 flex flex-col justify-center items-center border">
      <div className="flex text-lg gap-4">
        <h2 className="underline">Vip Customers</h2>
        <Link href="/dashboard">All Customers</Link>
      </div>
      <MatrixList customerData={vipCustomerData} />
    </div>
  );
};

export default Vip;
