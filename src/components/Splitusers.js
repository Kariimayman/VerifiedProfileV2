import React, { useState, useEffect } from "react";
import Loader from "./utils/loader";
import { getDocs } from "firebase/firestore";
import Admin from "./admin";
import { colRef } from "./storageconfig";
import { verifyAccount } from "./utils/functions";
const Splitusers = ({ usersList }) => {
  var [pendingList] = useState([]);
  var [newList] = useState([]);
  var [rejectedList] = useState([]);
  var [verifiedList] = useState([]);
  var [spamList] = useState([]);

  const [IDofuser, setUserID] = useState("");


  const [FrondID, setFrontID] = useState("");
  const [BackID, setBackID] = useState("");
  const [PicwithID, setPickWithID] = useState("");

  const [List, setList] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showPic, showpic] = useState(false);

  const splitUsers = async () => {
    console.log(usersList);
    if (usersList.length !== 0) {
      for (let i = 0; i < usersList.length; i++) {
        var user = usersList[i].split(",");
        if (user[1] === "Verified") {
          verifiedList.push(user[0]);
        } else if (user[1] === "Pending") {
          pendingList.push(user[0]);
        } else if (user[1] === "New") {
          newList.push(user[0]);
        } else if (user[1] === "Rejected") {
          rejectedList.push(user[0]);
        } else if (user[1] === "Spam") {
          spamList.push(user[0]);
        }
      }
      setList(true);
    }
  };

  const PicofID = async (ID) => {
    setUserID(ID)
    try {
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        if (doc.id == ID) {
          setFrontID(doc.data().FrontID);
          setBackID(doc.data().BackID);
          setPickWithID(doc.data().PicWithID);
          showpic(true);
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const verifyUser = async (ID, type) => {
    try {
      setList(false);
      await verifyAccount(ID, type);
    } catch (error) {
      console.log(error);
    } finally {
      setList(true);
      setRefresh(true);
    }
  };

  useEffect(() => {
    splitUsers();
  }, []);
  if (List === false) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (refresh === true) {
    return (
      <>
        <Admin />
      </>
    );
  }

  return (
    <>
      <div
        style={{ background: "#000", display: "flex", flexDirection: "row" }}
      >
        {/* Left Half*/}

        <div style={{ width: "60%" }}>
          <h1>New</h1>
          {/* New Users Part*/}
          {newList.length === 0 ? (
            <p>No User Found</p>
          ) : (
            <div>
              <ol>
                {newList.map((newList) => (
                  <li>{newList}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Verified Users Part*/}
          <h1>Verified</h1>
          {verifiedList.length === 0 ? (
            <p>No User Found</p>
          ) : (
            <div>
              <ol>
                {verifiedList.map((verifiedList) => (
                  <li>
                    {verifiedList}{" "}
                    <button
                      style={{
                        width: 150,
                        height: 30,
                        backgroundColor: "#fff",
                        borderRadius: 50,
                      }}
                      onClick={() => verifyUser(verifiedList, 0)}
                    >
                      Change to New
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Spam Users Part*/}
          <h1>Spam</h1>
          {spamList.length === 0 ? (
            <p>No User Found</p>
          ) : (
            <div>
              <ol>
                {spamList.map((spamList) => (
                  <li>
                    {spamList}{" "}
                    <button
                      style={{
                        width: 150,
                        height: 30,
                        backgroundColor: "#fff",
                        borderRadius: 50,
                      }}
                      onClick={() => verifyUser(spamList, 0)}
                    >
                      Change to New
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Pending Users Part*/}
          <h1>Pending</h1>
          {pendingList.length === 0 ? (
            <p>No User Found</p>
          ) : (
            <div>
              <ol>
                {pendingList.map((pendingList) => (
                  <li>
                    {pendingList}{" "}
                    <button
                      style={{
                        width: 100,
                        height: 30,
                        backgroundColor: "#fff",
                        borderRadius: 50,
                      }}
                      onClick={() => verifyUser(pendingList, 3)}
                    >
                      Verify
                    </button>
                    <button
                      style={{
                        width: 100,
                        height: 30,
                        backgroundColor: "#fff",
                        borderRadius: 50,
                      }}
                      onClick={() => verifyUser(pendingList, 2)}
                    >
                      Reject
                    </button>
                    <button
                      style={{
                        width: 100,
                        height: 30,
                        backgroundColor: "#fff",
                        borderRadius: 50,
                      }}
                      onClick={() => verifyUser(pendingList, 4)}
                    >
                      Spam
                    </button>
                    <div>
                      <button
                        style={{
                          width: 150,
                          height: 30,
                          backgroundColor: "#fff",
                          borderRadius: 50,
                        }}
                        onClick={() => PicofID(pendingList)}
                      >
                        Show pictures
                      </button>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Rejected Users Part*/}
          <h1>Rejected</h1>
          {rejectedList.length === 0 ? (
            <p>No User Found</p>
          ) : (
            <div>
              <ol>
                {rejectedList.map((rejectedList) => (
                  <li>{rejectedList} </li>
                ))}
              </ol>
            </div>
          )}
        </div>

        {/* Right Side*/}

        <div style={{ width: "40%", color: "black" }}>
          {showPic ? (
            <div style={{ backgroundColor: "#98AFC7	", paddingLeft: 120 , paddingBottom: 50,paddingTop: 50 }}>
              <h1 style={{ paddingLeft: "2vw" }}>Pictures of {IDofuser}</h1>
              <div style={{ paddingTop: "3vh" , paddingBottom: "5vh"}}>
                <h1 style={{ fontSize: 25 }}>Picture of the ID's front</h1>
                <img
                  src={FrondID}
                  style={{ width: 300, height: 300 }}
                  placeholder="blur"
                  alt="Front ID"
                />
              </div>
              <div style={{ paddingTop: "3vh" , paddingBottom: "5vh"}}>
                <h1 style={{ fontSize: 25 }}>Picture of the ID's back</h1>
                <img
                  src={BackID}
                  style={{ width: 300, height: 300 }}
                  alt="Back ID"
                />
              </div>
              <div style={{ paddingTop: "3vh" , paddingBottom: "5vh"}}>
                <h1 style={{ fontSize: 25 }}>Picture with the ID</h1>
                <img
                  src={PicwithID}
                  style={{ width: 300, height: 300 }}
                  alt="Picture With ID"
                />
              </div>
              <button
                style={{
                  width: 300,
                  height: 50,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  fontSize: 20,
                }}
                onClick={() => showpic(false)}
              >
                Hide pictures
              </button>
            </div>
          ) : (
            <h1></h1>
          )}
        </div>
      </div>
    </>
  );
};
export default Splitusers;
