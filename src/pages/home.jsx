import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

import Navbar from "../components/navbar";
import Chart from "../components/chart";
const Home = (props) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  const SectionStyle = {
    height: "100vh",
    width: "100%",
  };

  return (
    <div className="bg-white h-screen">
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={SectionStyle}>
            <Navbar />

            <br />
            <br />
            <br />
            <hr id="home" className="border-hidden" />

            <Chart />
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
            <Navbar />

            <br />
            <br />
            <br />

            <hr id="withdraws" />

            <p>Withdraws</p>
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
            <hr id="new_account" className="border-hidden" />

            <p>New account</p>
          </FullpageSection>
          <FullpageSection style={SectionStyle}>
            <hr id="transactions" className="border-hidden" />

            <p>Transactions</p>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>

      <br />
      <br />
      <br />
      <br />

      <hr id="transfer" className="border-hidden" />

      <p>Transfer</p>

      <hr id="my_loans" className="border-hidden" />

      <p>My loans</p>
    </div>
  );
};

export default Home;
