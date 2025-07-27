import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import ItemDetails from "./ItemDetails.jsx";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_FutMWIn8P",
  client_id: "7sakvo2eklu23uve7mpkm4970d",
  redirect_uri: "https://d7til5shwftu0.cloudfront.net/",
  response_type: "code",
  scope: "openid email phone",
};

const onSigninCallback = () => {
  // remove ?code=&state=... so it isn't handled twice
  window.history.replaceState({}, document.title, window.location.pathname);
};

createRoot(document.getElementById('root')).render(
  <AuthProvider {...cognitoAuthConfig} onSigninCallback={onSigninCallback}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  </AuthProvider>
);
