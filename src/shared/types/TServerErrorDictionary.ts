export type TErrorInfo = {
  type: string;
  message: string;
};

export type TServerErrorDictionary = {
  [key: string]: TErrorInfo;
};
