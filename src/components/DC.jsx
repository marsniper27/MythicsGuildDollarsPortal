import React, {useState}  from 'react';
import {Container, Button} from 'react-bootstrap';

function DC(){
  const [currentMode, setMode] = useState(null);
  const [gameID, setGameId] = useState(null);
  const [dcName, setDCName] = useState("");
  const [tempName, setTempName] = useState("");

  
 const creatClick = () => {
    setMode("Create");
    return createGame();
 }
  const handleSubmit =() =>{
    setDCName(tempName);
  }

  const createGame = () =>(
      <Container>
        <form onSubmit={handleSubmit}>
          <label>
            DC Username:
            <input key= "nameInput" type="text" value={tempName} onChange={(e) => setTempName(e.target.value)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h4>tempName = {tempName}</h4>
      </Container>
  )

  const joinGame = () => {
    setMode("Join")
    return(
      <Container>
        <form>
          <label>
            Game ID:
            <input type="text" name="game_ID" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Container>
    )
  }
  
  const Select = () => (
    <Container>
      <Button onClick={()=>creatClick()} color="primary" variant="contained">
          Create Game
      </Button>
      <Button onClick={()=>joinGame()} color="primary" variant="contained">
          Join Game
      </Button>
    </Container>
  )

  const Mode = () =>{
    switch(currentMode){
      case null:
        return Select();
        break;
      case "Create":
        return createGame();
        break;
      case "Join":
        return joinGame();
        break;
      default:
        Select()
    }
  }
  
  const DC = () => (
    <Container className="p-3" flex ="true">
        <h1 className="header">Dark Country Betting</h1>
        <h2 className="intro">Use your MG$ to bet against other players in Dark Countries.</h2>
        <Mode/>
    </Container>
  );
  return DC();
}

export default DC;