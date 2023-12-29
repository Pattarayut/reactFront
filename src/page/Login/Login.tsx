/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import Signup from "../../component/Signup";
import LoginCom from "../../component/Login/LoginCom";
import axios from "../../configs/axios";
import { IFormLogin } from "../../page/Login/Login.interface";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialForm = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const [mode, setMode] = useState<string>("login");
  const [form, setForm] = useState<IFormLogin>(initialForm);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangeMode = (type: string): void => {
    setMode(type);
  };

  const onChangeinput = (name: string, value: string): void => {
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onSignup = async (): Promise<void> => {
    try {
      setIsLoading(true);

      const { data } = await axios.post("users/register", form);
      if (data) {
        toast.success(data?.message);
        setMode("login");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.error?.message || "This is an error!");
      console.log("error===>>>", error);
    } finally {
      setIsLoading(false);
    }
  };
  const onLogin = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const payload = {
        username: form?.username,
        password: form?.password,
      };

      const { data } = await axios.post("users/login", payload);
      if (data) {
        toast.success(data?.message);
        localStorage.setItem(
          "tokenTestCJ",
          JSON.stringify({ token: data?.access_token })
        );
        setAuthenticated(true);
        navigate("/product");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.error?.message || "This is an error!");
      console.log("error===>>>", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {mode === "login" ? "Login" : "Register"}
              </h1>
              {mode === "login" ? (
                <LoginCom
                  onChangeMode={onChangeMode}
                  onChangeinput={onChangeinput}
                  onSave={onLogin}
                  isLoading={isLoading}
                />
              ) : (
                <Signup
                  onChangeMode={onChangeMode}
                  onChangeinput={onChangeinput}
                  onSave={onSignup}
                  isLoading={isLoading}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
