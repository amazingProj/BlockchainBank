import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../components/navbar";
const Home = (props) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="bg-white h-screen">
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <hr id="home" />

      <p>Home</p>
      <hr id="withdraws" />

      <p>Withdraws</p>

      <hr id="new_account" />

      <p>New account</p>

      <hr id="transactions" />

      <p>Transactions</p>

      <hr id="transfer" />

      <p>Transfer</p>

      <hr id="my_loans" />

      <p>My loans</p>
    </div>
  );
};

export default Home;
