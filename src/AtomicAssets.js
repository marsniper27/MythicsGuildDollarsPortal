import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

const Asset = () => {
  const nfts = useSelector(state => state.global.nfts)
  const user = useSelector(state => state.global.user)

  return (
    user != null ?
      nfts != null ? 
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
        <h1 key ="message">No NFTs linked to {user}</h1>
      </Container> 
    :
    ""
  );
}
export default Asset