/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { ILogin } from "../../page/Login/Login.interface";

const Signup: React.FC<ILogin> = (props: ILogin) => {
  const { onChangeMode, onChangeinput, onSave, isLoading } = props;

  return (
    <>
      <div className="space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeinput(e?.target?.name, e?.target?.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            name="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeinput(e?.target?.name, e?.target?.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeinput(e?.target?.name, e?.target?.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@company.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChangeinput(e?.target?.name, e?.target?.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center border"
          onClick={() => {
            if (isLoading) return;
            onSave();
          }}
        >
          Sign up
        </button>
        <button
          type="submit"
          className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center border"
          onClick={() => {
            onChangeMode("login");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Signup;
