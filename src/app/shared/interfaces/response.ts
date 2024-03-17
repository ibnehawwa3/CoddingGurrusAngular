export interface BaseResponse {
  message: string;
  status: ResponseStatus;
}
export interface ApiResponse<T> extends BaseResponse {
  data: T;
}

export interface ApiResponseArray<T> extends BaseResponse {
  data: T[]
}
enum ResponseStatus {
  Success = 200,
  BadRequest = 400,
  NotFound = 404,
}
