import React, { useState, useEffect } from 'react';

//import * as waxjs from "@waxio/waxjs/dist";
import Button from 'react-bootstrap/Button';

function logout() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

const LogoutButton = () => {
    const [isLogingOut, setLogingOut] = useState(false);

    useEffect(() => {
        if (isLogingOut) {
            logout().then(() => {
            setLogingOut(false);
            });
        }
    } , [isLogingOut]);

  const handleClick = () => setLogingOut(true);
    return (
    <Button
      variant="primary"
      disabled={isLogingOut}
      onClick={!isLogingOut ? handleClick : null}
    >
      {isLogingOut ? 'Loging Out…' : 'Click to Logout'}
    </Button>
  );
}
export default LogoutButton