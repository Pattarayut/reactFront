export interface ILogin {
  onChangeMode: (e: string) => void;
  onChangeinput: (name: string, value: string) => void;
  onSave: () => void;
  isLoading: boolean;
}

export interface IFormLogin {
  name: string;
  username: string;
  email: string;
  password: string;
}
