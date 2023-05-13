import {IPopular} from "./PopularType";


export interface ITopRatedTypes {
    top: IPopular[]
    loader: boolean
    error: string
}