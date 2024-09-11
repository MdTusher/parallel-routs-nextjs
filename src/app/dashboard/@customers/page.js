import MatrixList from "@/app/components/MatrixList";
import Link from "next/link";
const customerData = [
  {
    id: 1,
    name: "Alice Johnson",
    value: 10566,
  },
  {
    id: 2,
    name: "Brian Smith",
    value: 12366,
  },
  {
    id: 3,
    name: "Catherine Lee",
    value: 15887,
  },
  {
    id: 4,
    name: "David Brown",
    value: 34523,
  },
  {
    id: 5,
    name: "Emily Davis",
    value: 78899,
  },
  {
    id: 6,
    name: "Frank Wilson",
    value: 89833,
  },
  {
    id: 7,
    name: "Grace Taylor",
    value: 47289,
  },
];

const Customers = () => {
  return (
    <div className="w-full max-w-xl px-2 pb-2 flex flex-col justify-center items-center border">
      <div className="flex text-lg gap-4">
        <Link href="/dashboard/vip">Vip Customers</Link>
        <h2 className="underline">All Customers</h2>
      </div>
      <MatrixList customerData={customerData} />
    </div>
  );
};

export default Customers;
