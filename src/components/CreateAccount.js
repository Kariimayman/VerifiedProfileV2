import React, {useState, useEffect} from "react";
import Loader from "./utils/loader";
import Direct from "./Direct"
import {
  checkAccount,
  createProfile,
} from "./utils/functions";

const Account = () => {
  const [userId] = useState(window.walletConnection.account().accountId);
  const [loading, setLoading] = useState(false);
  const [profileExist, setaccount] = useState(true);
  const CheckIfExist = async()=> {
    try {
      setLoading(true);
      setaccount( await (checkAccount(userId)));
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
    }  
  }
  const createNewProfile = async()=> {
    try {
      setLoading(true);
      if(!profileExist)
      {
        await (createProfile());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }  
};
  useEffect(async() => {
   await CheckIfExist().then(createNewProfile())
  }, []);

return (
  <>
    {!loading ? (
      <>
      <Direct ID = {userId}/>
      </>

    ) : (
      <Loader />
    )}
  </>
);
};

export default Account;