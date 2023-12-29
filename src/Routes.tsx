/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Routes as Router, Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Login from "./page/Login/Login";
import Product from "./page/Product/Product";
import CreateProduct from "./page/Product/CreateProduct";
import NotFound from "./page/NotFound";
import { useNavigate } from "react-router-dom";
import axios from "./configs/axios";

type Props = {};

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);
  const isAuth = localStorage.getItem("tokenTestCJ");

  if (!authenticated && !isAuth) return <Navigate to="/login" replace />;

  return <Outlet />;
};

const Routes: React.FC = (props: Props) => {
  const isAuth = localStorage.getItem("tokenTestCJ");
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (!isAuth && !authenticated) return;
      if (isAuth && !authenticated) {
        try {
          const json: { token: string } = JSON.parse(isAuth);
          const { token } = json;
          const { data } = await axios.get(`users/checkTimeToken/${token}`);
          if (data) {
            setAuthenticated(true);
          }
        } catch (error) {
          console.log("error===>>>", error);
          localStorage.removeItem("tokenTestCJ");
          setAuthenticated(false);
          navigate("/login");
        }
      }
    })();
  }, [isAuth]);

  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Product />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/product/update/:id" element={<CreateProduct />} />
      </Route>
    </Router>
  );
};

export default Routes;
