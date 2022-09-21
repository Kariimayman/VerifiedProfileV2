import {parseNearAmount} from "near-api-js/lib/utils/format";
const GAS = 100000000000000;

export function isAccountVerified(ID) {
  return window.contract.isAccountVerified({ accountID :  ID} ,GAS , parseNearAmount("1"));
}

export  function createProfile() {
  return window.contract.createProfile();
}

export  function verificationType(ID) {
  return window.contract.verificationPerUser({ accountID :  ID});
}

export  function checkAccount(ID) {
  return window.contract.accountExist({ accountID :  ID});
}

export async function changeToPending(ID){
  await window.contract.changeToPending({accountID : ID} ,GAS); 
}

export async function verifyAccount(ID,Type){
  await window.contract.verifyAccount({accountID : ID, verification : Type } ,GAS); 
}

export async function getusersList(){
  return window.contract.getUsers(); 
}