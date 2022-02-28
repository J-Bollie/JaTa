import { Status } from "../../context/TodoContext";

export interface AddTodoInterface{
    title: string,
    description: string,
    status: Status
}