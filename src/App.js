import React, { useEffect, useCallback, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { login, logout as destroy, accountBalance } from "./components/utils/near";
import Cover from "./components/utils/Cover";
import Wallet from "./components/Wallet";
import coverImg from "./cover.png";
import "./App.css";
import Admin from "./components/admin"
import CheckAccountStatus from "./components/AccountExists"

const App = function AppWrapper() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const [adminList] = useState(["aliabdallah9.testnet", "mhassanist.testnet","karimayman.testnet","hamzatest.testnet"]);

  

  function isAdmin(){
    for(let i = 0; i<adminList.length;i++){
      if(account.accountId === adminList[i]){
        return true
      }
    }
    return false
  }

  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return (
    <>
    <div style={{    
      minHeight:"100vh",
      backgroundColor: "black",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      color:"white" }}>
      {account.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-3">
            <Nav.Item>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <div> <h1>VProfile</h1></div>
          <main>
          {isAdmin()? (
            <Admin/>
          ): 
            (
              <CheckAccountStatus ID = {account.accountId}/>
            )
          }
          </main>
        </Container> 
      ) : (
        <Cover name="Verified Accounts" login={login} coverImg={coverImg}/>
      )}
      </div>
    </>
    
  );
}

export default App;