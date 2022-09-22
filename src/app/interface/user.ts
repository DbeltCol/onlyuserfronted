import { Role } from "./role";

export interface User {
    id:number;
    first_name:string;
    second_name:string;
    first_lastname:string;
    second_lastname:string;
    email:string;
    role:Role;
    name_completed:string;
    document: number;
    type_document:string;
}
