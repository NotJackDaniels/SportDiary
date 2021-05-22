export default interface AuthServiceInterface {
  getConfirmation: (
    phone: string,
    setError: (error: string) => void,
  ) => Promise<any>;
}
