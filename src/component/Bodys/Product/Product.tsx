/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
const ProductCom: React.FC<any> = (props: any) => {
  const { dataTable, onClickAction, onClickDelete } = props;

  return (
    <>
      <div className="w-full overflow-x-hidden border-t flex flex-col">
        <main className="w-full flex-grow p-2">
          <h1 className="text-3xl text-black pb-2">Product</h1>

          <div className="w-full mt-2">
            <div className="p-2 flex justify-end">
              <button
                type="submit"
                className="font-medium rounded-lg text-sm px-5 py-2.5 text-center border w-[100px] text-white bg-gray-800"
                onClick={() => {
                  onClickAction("create");
                }}
              >
                New
              </button>
            </div>
            <div
              className="bg-white overflow-auto "
              style={{
                maxHeight: "63vh",
              }}
            >
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className=" py-3 px-4 uppercase font-semibold text-sm text-center">
                      Name
                    </th>
                    <th className="py-3 px-4 uppercase font-semibold text-sm text-center">
                      Description
                    </th>
                    <th
                      className="py-3 px-4 uppercase font-semibold text-sm text-center"
                      style={{
                        maxWidth: "120px",
                      }}
                    >
                      Status
                    </th>
                    <th className="py-3 px-4 uppercase font-semibold text-sm text-center">
                      Created
                    </th>
                    <th className="py-3 px-4 uppercase font-semibold text-sm text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                {dataTable?.[0] ? (
                  <>
                    {dataTable?.map((item: any, index: number) => {
                      return (
                        <tbody key={index}>
                          <tr className={`${index % 2 ? "bg-gray-200" : ""}`}>
                            <td className="w-1/3 text-left py-3 px-4 text-center">
                              {item?.name}
                            </td>
                            <td className="w-1/3 text-left py-3 px-4 text-center">
                              {item?.description || "-"}
                            </td>
                            <td
                              className="text-left py-3 px-4 text-center"
                              style={{
                                maxWidth: "120px",
                              }}
                            >
                              <button
                                className={`${
                                  item?.status === "off"
                                    ? "bg-gray-600"
                                    : "bg-lime-500"
                                }   text-white rounded-lg w-[100px] text-center `}
                              >
                                {item?.status}
                              </button>
                            </td>
                            <td className="text-left py-3 px-4 w-1/3 text-center">
                              {new Date(item?.created).toLocaleString() || "-"}
                            </td>
                            <td
                              className="text-left py-3 px-4 flex text-center"
                              style={{
                                gap: "20px",
                              }}
                            >
                              <button
                                type="button"
                                className="bg-yellow-300 text-white rounded-lg rounded-full w-[70px]"
                                onClick={() => {
                                  onClickAction("update", item?._id);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="bg-red-500 text-white rounded-lg rounded-full w-[100px]"
                                onClick={() => {
                                  onClickDelete(item?._id);
                                }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <tbody>
                      <td className="w-1/3 py-3 px-4 text-center" colSpan={5}>
                        ไม่มีข้อมูล
                      </td>
                    </tbody>
                  </>
                )}
              </table>
            </div>
          </div>
        </main>

        <footer className="w-full bg-white text-right p-4">Product</footer>
      </div>
    </>
  );
};

export default ProductCom;
