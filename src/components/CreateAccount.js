import React, {useState, useEffect} from "react";
import Loader from "./utils/loader";
import Direct from "./Direct"
import {
  createProfile,
} from "./utils/functions";

const Account = ({profileExist}) => {
  const [userId] = useState(window.walletConnection.account().accountId);
  const [loading, setLoading] = useState(false);
  const createNewProfile = async()=> {
    try {
      setLoading(true);
      if(profileExist === false)
      {
        await (createProfile());
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }  
};
  useEffect(() => {
    let abortController = new AbortController();  
    createNewProfile()
    return () => {  
    abortController.abort();  
    }
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