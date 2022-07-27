import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import HomeComponent from "../components/home";
import Loading from "../components/loading";
import Withdraw from "../components/withdraw";
import NewAccountForm from "../components/new_account_form";
import Transactions from "../components/transactions";
import Transfer from "../components/transfer";
import Loans from "../components/loans";

const Home = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
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

              <hr id="withdraws" className="border-hidden" />

              <p>Withdraws</p>

              <p>History</p>
              <p>date: 21/7/22 0.2 Lev Coin equals to 2.1 ILS</p>

              <br />

              <Withdraw />

              <hr id="new_account" className="border-hidden" />

              <div className="mt-20 mb-10">
                <div className="text-center text-5xl mb-5">New account</div>

                <div className="text-center text-xl">
                  <div>Create a new account</div>
                </div>
              </div>

              <NewAccountForm />

              <br />

              <hr id="transactions" className="border-hidden" />

              <div className="text-center text-5xl mt-10 mb-10">
                Transactions
              </div>

              <Transactions />

              <p>date 21/7/22 you received money 0.6 LevCoin</p>

              <p>
                You transfer two lev coins to another account number 2223231
              </p>
              <br />
              <hr id="transfer" className="border-hidden" />

              <div>
                <div className="text-center text-5xl mt-10 mb-10">
                  Transfer money
                </div>{" "}
                <Transfer />
              </div>

              <p>specify the amount to transfer</p>
              <p>sure to transfer 2 lev coins</p>

              <br />
              <hr id="my_loans" className="border-hidden" />

              <div className="text-center text-5xl mt-10 mb-10">My loans</div>

              <Loans />

              <p>date 21/7/22 5 lev coins from bank until 21/7/22</p>
              <p>interest of 0.05 in total means 0.002 per Month </p>
              <p>You almost pay all the money</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
