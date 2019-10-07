import {ApiStatus} from "./ApiStatus";

export interface IState {
    status: ApiStatus,
    response?: object,
    httpStatus?: number
}
