import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Navbar from "../components/navbar";
import Chart from "../components/chart";
import Dollar from "../components/dollar";
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
      <hr id="home" className="border-hidden" />

      <Dollar />
      <Chart />

      <hr id="withdraws" className="border-hidden" />

      <p>Withdraws</p>

      <hr id="new_account" className="border-hidden" />

      <p>New account</p>

      <hr id="transactions" className="border-hidden" />

      <p>Transactions</p>

      <hr id="transfer" className="border-hidden" />

      <p>Transfer</p>

      <hr id="my_loans" className="border-hidden" />

      <p>My loans</p>
    </div>
  );
};

export default Home;
