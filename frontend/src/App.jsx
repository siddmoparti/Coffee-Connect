import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home.jsx";

// App.js

import { useAuth } from "react-oidc-context";

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "7sakvo2eklu23uve7mpkm4970d";
    const logoutUri = "https://d7til5shwftu0.cloudfront.net/";
    const cognitoDomain = "https://us-east-1futmwin8p.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <button onClick={() => auth.removeUser()}>Sign out</button>
        <Home/>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
}

export default App;

