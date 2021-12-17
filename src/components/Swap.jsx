import React, {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Button,Container,Col,Row } from 'react-bootstrap'; 
import Grid from '@mui/material/Grid';
import {ExplorerApi} from "atomicassets";
import * as waxjs from "@waxio/waxjs/dist";
import { logKey,logNfts, setWax,setAccountName } from '../Float';
//import { Wax } from 'ual-wax'
import { UALProvider, withUAL } from 'ual-reactjs-renderer'

function Swap() {  
  const userAccount = useSelector(state => state.global.user);
  const wax = useSelector(state => state.global.wax);
  const floatAccount = useSelector(state => state.float.accountName);
  const nfts = useSelector(state => state.global.nfts)
  const [nftCounter, setNftCounter] = useState(0);
  const [loadedFloat, setLoadedFloat] = useState(false);
  const [floatNft, setFloat] = useState(null);
  const dispatch = useDispatch();
  let requestedNfts = [];
  const [requestedValue, setRequestedValue] = useState(0);

  async function getFloat(){
    const api = new ExplorerApi("https://wax.api.atomicassets.io", "atomicassets", {fetch});
    try {
      const  Nfts =  await api.getAssets({owner: floatAccount, collection_name:"mythicsguild" });
      dispatch(logNfts(Nfts));
      setFloat(Nfts)
      setLoadedFloat(true);
    } 
    catch(e) {
      console.error("login failed : ", e);
    }
  }

  const nextNFT = () =>{
    nftCounter !== nfts.length-1 ? setNftCounter(nftCounter+1) : setNftCounter(0);
  }

  const prevNFT = () =>{
    nftCounter !== 0 ? setNftCounter(nftCounter-1) :  setNftCounter(nfts.length-1);
  }
  
  const selectTrade = (nftId,nftValue) =>{
	  requestedNfts.push(nftId);
	  setRequestedValue(requestedValue+parseInt(nftValue));
  }

  async function transferNFT() {
    const waxTest = new waxjs.WaxJS({ 
      rpcEndpoint: 'https://testnet.wax.eosdetroit.io'})
       //userAccount: 'marsniper222',
       //pubKeys: ['EOS72WyAAcCWAhCQY8gafz7FZ8SXbvPDbcoxHE9sX7FCNUiaH8VEU'] });
    const userTestAccount = await waxTest.login();
    try{
      const result = await waxTest.api.transact({
        actions: [{
          account: 'marsniper222',
          name: 'swapmgd',
          authorization: [{
            actor: waxTest.userAccount,
            permission: 'active',
          }],
          data: {
            user: waxTest.userAccount,
            to: 'letstestthis',
            amount: "0.00000001 WAX",
          },
        }]
      }, {
        blocksBehind: 3,
        expireSeconds: 30,
       });
    window.alert([result])
  }
  catch (err) {
    throw(err)
  }

    // try {
    //   const resultWithConfig = await waxTest.api.transact({
    //     actions: [{
    //       account: 'marsniper222',
    //       name: 'swapmgd',
    //       authorization: [{
    //         actor: waxTest.userAccount,
    //         permission: 'active',
    //       }],
    //       data: {
    //         user:waxTest.userAccount,
    //         to: "letstestthis",
    //         amount: "0.001 WAX"
    //       },
    //     }]
    //   }, {
    //     blocksBehind: 3,
    //     expireSeconds: 30,
    //   });
    //   return resultWithConfig;
    // } catch (err) {
    //   throw(err)
    // }
  }
  
  const swap = () => {
    if(loadedFloat == false){ getFloat() }
    return(
      <Container className="p-3" flex ="true" >
          <h1 className="header" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Mythics Guild Dollars Swap</h1>
          <h2 className="intro" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Trade you MG$ Nfts to different denominations. Use to get lower values for use in slots and betting or consolidate your lower values for a higher vlaue.</h2>
          <Row className="justify-content-md-center">
                  <Button onClick={()=>transferNFT()} color="primary" variant="contained" variant="secondary">
                    Transfer to test account
                  </Button>
                   <h4 md="auto">Value of selected NFTs: MG${requestedValue}</h4>
            {userAccount != null ?
              nfts != null ? 
                <Col md="auto">
                  <Container classname = "nftSelector" md="auto">
                    <img key ="nftImage" alt = "NFT" src = {"https://ipfs.atomichub.io/ipfs/" + nfts[nftCounter].data.img} width = "100" hight = "100" />
                    <h4 md="auto">{nfts[nftCounter].name}</h4>
                    <h4 md="auto">MG${nfts[nftCounter].data['dollar value']}</h4>
                      <Button onClick={()=>prevNFT()} color="primary" variant="contained" variant="secondary">
                        Prev NFT
                      </Button>
                      {' '}
                      <Button  onClick={()=>nextNFT()} color="primary" variant="contained" variant="secondary">
                        Next NFT
                      </Button>
                    <h4 md="auto">{nftCounter}/{nfts.length}</h4>
                  </Container>
                </Col>
              :
                <Col md="auto">
                  <Container key = "noNft">
                    <h1 key ="message">No NFTs linked to {userAccount}.</h1>
                  </Container> 
                </Col>
            :
            <Col md="auto">
              "Please Login"
            </Col>
            }
            {floatNft != null ?
              <Col md="auto" lg>
                <Container style={{background:'gray'}}>
                  <h1  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Float</h1>
                  <Container key="gridContianer" background = "gray">
                    <Grid key = "floatNftGrid" container justifyContent = "space-evenly" alignItems = "center" >
                      {floatNft.map((nft)=> 
                        <Grid key ={nft.id} item xs={2}>
                          <h4 key={nft.id}>{nft.name}</h4>
                          <img key ={nft.id} alt = "NFTs" src = {"https://ipfs.atomichub.io/ipfs/" + nft.data.img} width = "75" hight = "75" />
                          <h4 key={nft.id}>MG${nft.data['dollar value']}</h4>
						  <Button  onClick={()=>selectTrade(nft.id,nft.data['dollar value'])} color="primary" variant="contained" variant="secondary">
							Select NFT
						  </Button>
                        </Grid>
                      )}
                    </Grid>
                  </Container>
                </Container>
              </Col>
            :
              <Col md="auto">
                <h1>Float is Empty</h1>
              </Col>
            } 
          </Row>
        </Container>
    )
  }
  return swap()
}
  
export default Swap;