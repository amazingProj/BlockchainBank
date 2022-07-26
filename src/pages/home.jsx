import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import HomeComponent from "../components/home";
import Loading from "../components/loading";
import Withdraw from "../components/withdraw";
import NewAccountForm from "../components/new_account_form";
import Transactions from "../components/transactions";
import Transfer from "../transfer";
import Loans from "../components/loans";

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="bg-white h-screen">
          <Navbar isManager={props.isManager} />

          {props.isManager ? (
            <div></div>
          ) : (
            <div>
              <br />
              <br />
              <br />
              <br />
              <hr id="home" className="border-hidden" />

              <HomeComponent />

              <br />
              <hr id="withdraws" className="border-hidden" />

              <p>Withdraws</p>

              <p>History</p>
              <p>date: 21/7/22 0.2 Lev Coin equals to 2.1 ILS</p>

              <br />

              <Withdraw />

              <hr id="new_account" className="border-hidden" />

              <p>New account</p>

              <p>Create new account </p>
              <p>Enter the required fields </p>
              <p>transfer an initial amount to transfer to this new account </p>
              <p> You want to transfer 2 lev coins </p>

              <NewAccountForm />

              <br />

              <hr id="transactions" className="border-hidden" />

              <p>Transactions</p>

              <p>date 21/7/22 you received money 0.6 LevCoin</p>

              <p>
                You transfer two lev coins to another account number 2223231
              </p>

              <Transactions />
              <br />
              <hr id="transfer" className="border-hidden" />

              <p>Transfer</p>
              <p>specify the amount to transfer</p>
              <p>sure to transfer 2 lev coins</p>

              <Transfer />
              <br />
              <hr id="my_loans" className="border-hidden" />

              <p>My loans</p>
              <p>date 21/7/22 5 lev coins from bank until 21/7/22</p>
              <p>interest of 0.05 in total means 0.002 per Month </p>
              <p>You almost pay all the money</p>
              <Loans />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
