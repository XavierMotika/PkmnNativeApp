
import Login from 'pages/login';
import MainPage from 'pages/mainPage';
import { useState } from 'react';

import AuthenticationService from 'services/Authentication';



export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    AuthenticationService.isAuthenticated
  );

  return (
    isAuthenticated? (
    <MainPage />):(
    <Login setIsAuthenticated={setIsAuthenticated} />
    ));
}


