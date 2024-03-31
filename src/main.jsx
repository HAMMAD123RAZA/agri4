import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import SignUp from './components/SignUp.jsx';

const Root = () => {
  const [signedUp, setSignedUp] = useState(false);

  const handleSignUp = () => {
    setSignedUp(true);
  };

  return (
    <React.StrictMode>
      {!signedUp ? (
        <SignUp onSignUp={handleSignUp} />
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);