import Link from "next/link";

const Header = () => {
  return (
    <div className="p-6 bg-teal-200 text-xl">
      <Link className="cursor-pointer font-bold tracking-widest" href="/">
        Home page
      </Link>
    </div>
  );
};

export default Header;
