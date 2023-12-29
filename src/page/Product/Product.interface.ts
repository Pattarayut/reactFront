import React from "react";

/* eslint-disable @typescript-eslint/ban-types */
export interface IProduct {
  form: {
    name: string;
    description: string;
    status: string;
  };
  onChangeinput: (name: string, value: string) => void;
  onSave: (e: React.FormEvent<HTMLElement>) => void;
  onClickBack: () => void;
}

export interface IFormProduct {
  name: string;
  description: string;
  status: string;
}
