/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { IProduct } from "../../../page/Product/Product.interface";
const Create: React.FC<IProduct> = (props: IProduct) => {
  const { form, onChangeinput, onSave, onClickBack } = props;
  return (
    <>
      <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
        <main className="w-full flex-grow p-6">
          <h1 className="w-full text-3xl text-black pb-6">Create Product</h1>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-full my-6 pr-0 lg:pr-2">
              <div className="leading-loose">
                <form className="p-10 bg-white rounded shadow-xl">
                  <div className="">
                    <label
                      className="block text-sm text-gray-600"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={form?.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        onChangeinput(e?.target?.name, e?.target?.value);
                      }}
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      className=" block text-sm text-gray-600"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                      id="description"
                      name="description"
                      rows={6}
                      placeholder="Your inquiry.."
                      value={form?.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        onChangeinput(e?.target?.name, e?.target?.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="mt-2">
                    <label
                      className=" block text-sm text-gray-600"
                      htmlFor="status"
                    >
                      Status
                    </label>
                    <select
                      className="w-full px-5 py-2 text-gray-700 bg-gray-200 rounded"
                      name="status"
                      value={form?.status}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        onChangeinput(e?.target?.name, e?.target?.value);
                      }}
                    >
                      <option value="off">OFF</option>
                      <option value="on">ON</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <button
                      className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded px-2 mr-3"
                      type="submit"
                      onClick={(e: React.FormEvent<HTMLElement>) => {
                        onSave(e);
                      }}
                    >
                      Submit
                    </button>
                    <button
                      className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                      type="submit"
                      onClick={onClickBack}
                    >
                      Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <footer className="w-full bg-white text-right p-4">
          Product Create
        </footer>
      </div>
    </>
  );
};

export default Create;
