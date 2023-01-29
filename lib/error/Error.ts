export type ErrorName = 'ValidationError' | 'NotFound';

type ErrorInfo = {
  message: string;
  statusCode: number;
};

const statusCodeMap: Record<ErrorName, ErrorInfo> = {
  NotFound: {
    message: 'Not Found',
    statusCode: 404,
  },
  ValidationError: {
    message: 'Validation Error',
    statusCode: 422,
  },
};

export default class AppError extends Error {
  private _name = '';
  private _statusCode = 0;

  constructor(name: ErrorName) {
    const info = statusCodeMap[name];
    super(info.message);
    this._name = info.message;
    this._statusCode = info.statusCode;
  }

  get name(): string {
    return this._name;
  }

  get statusCode(): number {
    return this._statusCode;
  }
}

const isAppError = (error: any) => {
  return error instanceof AppError;
};
