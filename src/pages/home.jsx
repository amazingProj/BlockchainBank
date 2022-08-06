import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import HomeComponent from "../components/home";
import Loading from "../components/loading";
import Withdraw from "../components/withdraw";
import NewAccountForm from "../components/new_account_form";
import Transactions from "../components/transactions";
import Transfer from "../components/transfer";
import Loans from "../components/loans";
import Admin from "../components/admin";
import Table from "../components/table";
import UsersTable from "../components/usersTable";

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
            <div>
              {(window.location.href.match(/([^\/]*)\/*$/)[1] == "home#home" ||
                window.location.href.match(/([^\/]*)\/*$/)[1] == "home") && (
                <div>
                  <hr id="home" className="border-hidden" />
                  <br />
                  <br />
                  <br />
                  <br />

                  <Admin />
                </div>
              )}

              {window.location.href.match(/([^\/]*)\/*$/)[1] ==
                "home#accounts" && (
                <div>
                  <br />
                  <br />
                  <br />
                  <hr id="accounts" className="border-hidden" />

                  <div className="mb-20 text-center">
                    <div className="text-5xl mb-3"> Manage Accounts</div>
                    <div className="text-xl">
                      Approve users to start having an account, waiting list
                    </div>
                  </div>

                  <UsersTable />
                </div>
              )}

              {window.location.href.match(/([^\/]*)\/*$/)[1] ==
                "home#users" && (
                <div>
                  <hr id="users" className="border-hidden" />
                  <div className="mb-20 mt-20 text-center">
                    <div className="text-5xl mb-3"> All users</div>
                    <div className="text-xl">Explore all system's user</div>
                  </div>

                  <Table />

                  <br />
                  <br />
                  <br />
                </div>
              )}
            </div>
          ) : (
            <div>
              {(window.location.href.match(/([^\/]*)\/*$/)[1] == "home#home" ||
                window.location.href.match(/([^\/]*)\/*$/)[1] == "home") && (
                <div>
                  <hr id="home" className="border-hidden" />
                  <HomeComponent />
                </div>
              )}

              {window.location.href.match(/([^\/]*)\/*$/)[1] ==
                "home#withdraws" && (
                <div>
                  <hr id="withdraws" className="border-hidden" />
                  <Withdraw />
                </div>
              )}

              {window.location.href.match(/([^\/]*)\/*$/)[1] ==
                "home#new_account" && (
                <div>
                  <hr id="new_account" className="border-hidden" />
                  <div className="mt-20 mb-10">
                    <div className="text-center text-5xl mb-5">
                      New account request
                    </div>

                    <div className="text-center text-xl">
                      <div>Create a new account</div>
                    </div>
                  </div>
                  <NewAccountForm />
                  <br />
                </div>
              )}

              {window.location.href.match(/([^\/]*)\/*$/)[1] ==
                "home#transactions" && (
                <div>
                  <hr id="transactions" className="border-hidden" />
                  <div className="text-center text-5xl mt-20 mb-10">
                    Transactions
                  </div>
                  <Transactions />
                </div>
              )}

              {window.location.href.match(/([^\/]*)\/*$/)[1] ==
                "home#transfer" && (
                <div>
                  <hr id="transfer" className="border-hidden" />
                  <div>
                    <div className="text-center text-5xl mt-20 mb-10">
                      Transfer money
                    </div>{" "}
                    <Transfer />
                  </div>
                </div>
              )}

              {window.location.href.match(/([^\/]*)\/*$/)[1] ==
                "home#my_loans" && (
                <div>
                  <hr id="my_loans" className="border-hidden" />
                  <div className="text-center text-5xl mt-20 mb-10">
                    My loans
                  </div>
                  <Loans />
                  <br />
                  <br />
                  <br />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
