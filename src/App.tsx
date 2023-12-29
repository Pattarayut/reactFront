/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./Routes";

import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
