import React, { useState, useEffect} from 'react';
import {ExplorerApi} from "atomicassets";
import * as waxjs from "@waxio/waxjs/dist";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import{ logKey, logNfts, logUser, setWax } from "./Globals";

function Waxlogin(){
  const userAccount = useSelector(state => state.global.user)
  const dispatch = useDispatch()
  const api = new ExplorerApi("https://wax.api.atomicassets.io", "atomicassets", {fetch});
  
  async function Login (wax) {    
      try {
        const user = await wax.login();
        const publicKeys = wax.pubKeys;
        const  fetchedNft =  await api.getAssets({owner: user, collection_name:"mythicsguild" });     
        document.getElementById('accountName').append(user);
        dispatch(logUser(user));
        dispatch(logKey(publicKeys));
        dispatch(logNfts(fetchedNft));
        console.log("keys :", publicKeys);
        console.log("user :", user);
      } catch(e) {
        console.error("login failed : ", e);
        //document.getElementById('error').textContent(e.message);
      }
  }

  function LogOut(){
    dispatch(logUser(null));
    dispatch(logNfts(null));
    dispatch(logKey(null));
    dispatch(setWax(null))
  }

  const LoginButton = () => {
    const [isLogingIn, setLogingIn] = useState(false);
    const [isLogingOut, setLogingOut] = useState(false);

    useEffect(() => {
      if (userAccount == null)  {
        if (isLogingIn) {
          const wax = new waxjs.WaxJS({
            rpcEndpoint: "https://wax.greymass.com",
          });
          dispatch(setWax(wax))
          Login(wax).then(() => {setLogingIn(false)});
        }
      }
      else{
        if (isLogingOut) {
          LogOut();
          setLogingOut(false);
        }
      }
    }, [isLogingIn,isLogingOut]);

    const handleClick = () => {
      if(userAccount == null){
        setLogingIn(true);
      }
      else{
        setLogingOut(true);
      }
    }

    if (userAccount == null)  {
      return ( 
        <Button
          variant="primary"
          disabled={isLogingIn}
          onClick={!isLogingIn ? handleClick : null}
        >
          {isLogingIn ? 'Loging In…' : 'Login'}
        </Button>
      )
    }
    else{
      return(
        <Button
          variant="primary"
          disabled={isLogingOut}
          onClick={!isLogingOut ? handleClick : null}
        >
          {isLogingOut ? 'Loging Out…' : 'Log Out'}
        </Button>
      )
    }
  }

  return <LoginButton/>
}

const Loginb = () => (
  Waxlogin()
);
export default Loginb