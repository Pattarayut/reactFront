/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import axios from "../../configs/axios";
import DashboedBar from "../../component/DashboedBar/DashboedBar";
import DesktopHeader from "../../component/DesktopHeader/DesktopHeader";
import ProductCom from "../../component/Bodys/Product/Product";
// eslint-disable-next-line @typescript-eslint/ban-types
const Product = () => {
  const navigate = useNavigate();

  const [dataTable, setDataTable] = useState<any[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const { data } = await axios.get("product/list");
        if (data) {
          setDataTable([...data]);
        }
      } catch (error: any) {
        toast.error(
          error?.response?.data?.error?.message || "This is an error!"
        );
        console.log("error===>>>", error);
      }
    })();
  }, []);

  const onClickAction = (type: string, docID?: string): void => {
    if (type === "create") {
      navigate("/product/create");
    } else if (type === "update") {
      navigate(`/product/update/${docID}`);
    }
  };

  const onClickDelete = async (docID?: string): Promise<void> => {
    try {
      const { data } = await axios.delete(`product/remove/${docID}`);
      if (data) {
        toast.success("delete success");
        navigate(0);
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.error?.message || "This is an error!");
      console.log("error===>>>", error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 font-family-karla flex">
        <DashboedBar />
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
          <DesktopHeader />
          <ProductCom
            dataTable={dataTable}
            onClickAction={onClickAction}
            onClickDelete={onClickDelete}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
