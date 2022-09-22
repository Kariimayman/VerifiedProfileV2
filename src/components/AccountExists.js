import {
    checkAccount,
  } from "./utils/functions";
  import Loader from "./utils/loader";
  import Account from "./CreateAccount"
  import React, { useState, useEffect } from "react";

const CheckAccountStatus = ({ID}) => {
  const [profileStatus,setProfileStatus] =useState(true)
  const [loading, setLoading] = useState(false);

  const CheckIfExist = async()=> {
    try {
      setLoading(true);
      setProfileStatus(await checkAccount(ID));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }  
  }
  useEffect(async() => {
    await CheckIfExist()
  }, []);
  return (
    <>
      {!loading ? (
        <>
        <Account profileExist = {profileStatus}/>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
      }
export default CheckAccountStatus;