/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useMemo } from "react";
import toast from "react-hot-toast";
import axios from "../../configs/axios";
import DashboedBar from "../../component/DashboedBar/DashboedBar";
import DesktopHeader from "../../component/DesktopHeader/DesktopHeader";
import Create from "../../component/Bodys/Product/Create";
import { useNavigate, useLocation, useParams } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/ban-types
import { IFormProduct } from "./Product.interface";
const Product = () => {
  const navigate = useNavigate();
  const params = useParams();

  const location = useLocation();
  const isEdit = location?.pathname?.includes("update");
  console.log("isEdit", isEdit);
  console.log("params", params);

  const initialForm = {
    name: "",
    description: "",
    status: "off",
  };
  const [form, setForm] = useState<IFormProduct>(initialForm);

  const onChangeinput = (name: string, value: string): void => {
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onClickBack = () => {
    navigate("/product");
  };

  const onSave = async (e: React.FormEvent<HTMLElement>): Promise<void> => {
    e.preventDefault();
    try {
      if (!isEdit) {
        const { data } = await axios.post("product/create", { ...form });
        if (data) {
          toast.success("success");
          navigate("/product");
        }
      } else {
        const { data } = await axios.put(`product/update/${params?.id}`, {
          ...form,
        });
        if (data) {
          toast.success("success");
          navigate("/product");
        }
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.error?.message || "This is an error!");
      console.log("error===>>>", error);
    }
  };

  useMemo(() => {
    if (!isEdit) return;
    (async (): Promise<void> => {
      try {
        const { data } = await axios.get(`product/read/${params?.id}`);
        console.log("data", data);
        if (data) {
          setForm({ ...data?.[0] });
        }
      } catch (error: any) {
        toast.error(
          error?.response?.data?.error?.message || "This is an error!"
        );
        console.log("error===>>>", error);
      }
    })();
  }, []);

  return (
    <>
      <div className="bg-gray-100 font-family-karla flex">
        <DashboedBar />
        <div className="w-full flex flex-col h-screen overflow-y-hidden">
          <DesktopHeader />
          <Create
            form={form}
            onChangeinput={onChangeinput}
            onSave={onSave}
            onClickBack={onClickBack}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
