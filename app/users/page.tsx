import React, { Suspense } from "react";
import UsersTable from "./UsersTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <Link href={"/users/new"} className="btn">
        Add user
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UsersTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default UsersPage;
