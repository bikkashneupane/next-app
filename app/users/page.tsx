import React from "react";

interface GeoLocation {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const data: User[] = await response.json();

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {data.map((user) => (
          <div key={user.id}>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
