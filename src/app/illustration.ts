import { Purchase } from "./purchase";

export interface Illustration {
    id: number,
    carName: string,
    carModel: string,
    image: string,
    typeillustrationId: number,
    purchases?: Purchase[]
}
