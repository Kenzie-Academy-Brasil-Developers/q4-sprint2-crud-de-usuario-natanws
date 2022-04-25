import { Response } from "express";

class ErrorHandler {
  public status: number;
  public message: any;

  constructor(status: number, message: any) {
    this.status = status;
    this.message = message;
  }
}

const handleError = (error: any, res: Response) => {
  if (error instanceof ErrorHandler) {
    const { status, message } = error;

    return res.status(status).json({ error: message });
  }

  return res.status(400).json(error);
}

export { ErrorHandler, handleError };
