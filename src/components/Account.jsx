import React from 'react';
import Container from 'react-bootstrap/Container';
import Asset from "../AtomicAssets";
import "../Account.css"
import { useSelector} from 'react-redux';


function Account(){
    const userAccount = useSelector(state => state.global.user);
    
    const account = () => (
        <Container className="p-3" flex ="true">
        <h1 className="header">{userAccount==null ? "Please login": "Account: "+userAccount}</h1>
            <h2 className="intro">All Mythic guild and partner NFTs</h2>
            <Container className = "body" text = "white">
                <div>
                    <Asset/>
                </div>
            </Container>                
        </Container>
    );

    return account()
}
  export default Account;

  /*
  <Asset/>
  */

  /*  attempted to update on login 

  function Account(){
    const userAccount = useSelector(state => state.global.user);
    const nfts = useSelector(state => state.global.nfts)
    
    const account = () => (
        <Container className="p-3" flex ="true">
        <h1 className="header">{userAccount==null ? "Please login": "Account: "+userAccount}</h1>
            <h2 className="intro">All Mythic guild and partner NFTs</h2>
            <Container className = "body"  bg="black"  variant="dark">
                <div>
                    {userAccount != null ?
                        nfts != null 
                            ? 
                                <Container key="gridContianer">          
                                <Grid key = "nftGrid" container justifyContent = "space-evenly" alignItems = "center">
                                    {nfts.map((nft)=> 
                                    <Grid key ={nft.id} item xs={2}>
                                        <h4 key={nft.id}>{nft.name}</h4>
                                        <img key ={nft.id} alt = "NFTs" src = {"https://ipfs.atomichub.io/ipfs/" + nft.data.img} width = "75" hight = "75" />
                                        <h4 key={nft.id}>MG${nft.data['dollar value']}</h4>
                                    </Grid>
                                    )};
                                </Grid>
                                </Container>
                            : 
                            <Container key = "noNft">
                                <h1 key ="message">No NFTs linked to account.</h1>
                            </Container> 
                        :
                        ""
                    }
                </div>
            </Container>                
        </Container>
    );

    return account()
}

  */