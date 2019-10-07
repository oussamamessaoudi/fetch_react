import {HttpMethod} from "./HttpMethod";
import {FetchTypes} from "./FetchTypes";

export interface IPropsFetch {
    url: string
    method: HttpMethod
    headers: object
    data: object
    children: object
    fetchTypes: FetchTypes,
    start: boolean
}
