import { Status } from "../../context/TodoContext";

export interface TodoPropsInterface{
    id: number,
    data: {
        title: string,
        description: string,
        status: Status
    }
}

export interface TodoDataInterface{
    title: string,
    description: string,
    status: Status
}