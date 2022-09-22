import React, { useState, useEffect } from "react";
import Loader from "./utils/loader";
import { getusersList } from "./utils/functions";
import Splitusers from "./Splitusers"
const Admin = () => {

  var [userList, setUsers] = useState([]);
  
  const getUsers = async () => {
    try {
      setUsers(await getusersList());
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
     getUsers();    
  }, []);

  if(userList.length === 0)
  {
    return(<Loader/>)
  }

  return (
    <>
       <Splitusers usersList={userList}  />
    </>
  );
};
export default Admin;
