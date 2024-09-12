import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full py-4 px-5 bg-slate-500 text-white flex gap-5 font-bold text-lg">
      <Link href={"/"}>Next-App</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/admin"}>Admin</Link>
    </div>
  );
};

export default NavBar;
