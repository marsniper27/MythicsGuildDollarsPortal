import React from "react";
import { Container,Image, Table } from "react-bootstrap";

function Home() {
  return (
    <div className="Home" >
        <Container className="p-3" >
            <h1 className="header"style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Welcome To Mythics Guild Dollars Portal</h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <Image className = "logo" 
                width="500" 
                height="500" 
                src="https://gateway.pinata.cloud/ipfs/QmUZhMHXBA2q3rRZYkcL5jaoXYizoHH9bxfCPEZWNsT2Cu" 
              />
            </div>
        </Container>
        <Container>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Dark Country Betting</th>
                <th>Mythics Guild Dollars Slots</th>
                <th>Mythics Guilds Dollars Swap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Use your MG$ to bet against other players in Dark Countries</td>
                <td>Use your MG$ to spin the slots for a chance to win prizes from the Guild and our supporting NFT Games and communities</td>
                <td>Trade you MG$ Nfts to different denominations. Use to get lower values for use in slots and betting or consolidate your lower values for a higher vlaue</td>
              </tr>
            </tbody>
          </Table>
        </Container>
    </div>
  );
}

export default Home;