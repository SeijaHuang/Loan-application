interface IErrorData {
  message: string;
  error: string;
}

export interface IGenericResponse<T> {
  success: boolean;
  data: T | IErrorData;
}
