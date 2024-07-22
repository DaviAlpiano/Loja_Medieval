export type HttpStatus =
  | 'SUCCESSFUL'
  | 'CREATED'
  | 'NO_CONTENT'
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'NOT_FOUND'
  | 'CONFLICT'
  | 'INVALID_VALUE';

const httpErrorMap: Record<HttpStatus, number> = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status: HttpStatus): number => httpErrorMap[status] || 500;

export default mapStatusHTTP;