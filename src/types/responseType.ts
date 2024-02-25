import {AxiosResponse} from "axios";
import {ICar} from "../interfces/carInterface";

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IRes
}