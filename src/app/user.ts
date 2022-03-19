import { Purchase } from "./purchase";

export interface User {
    id?: number,
    name: string,
    surname: string,
    email: string,
    password: string,
    purchases?: Purchase[]
}

