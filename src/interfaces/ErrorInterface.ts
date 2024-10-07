export interface IErrorContext {
  errorMessage: string | undefined;
  handleError: (status: string, message: string) => void;
  clearErrorMessage: () => void;
}
