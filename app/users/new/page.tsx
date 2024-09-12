"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>New User Page</h1>
      <button
        className="btn btn-secondary"
        onClick={() => router.push("/users")}
      >
        Create
      </button>
    </div>
  );
};

export default NewUserPage;
