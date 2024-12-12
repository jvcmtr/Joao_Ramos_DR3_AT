import {Item} from './Restaurant'

export interface User {
    id: string,
    name : string,
    password : string,
    email : string,
    phone : string,
    address : string,
    preferedTheme: 'light'|'dark',
    orders: Order[]
} 

export interface Order {
    address: string,
    dateRequest: Date,
    dateDeliver: Date,
    status: OrderStatus,
    restaurantId: string,
    price: string
    items: Item[]
}

export enum OrderStatus {
    WaitingAcceptance = "Aguardando o aceite",
    Accepted = "Sendo preparado pela loja",
    Collected = "Coletado pelo entregador",
    Delivered = "Entregue",
    Canceled = "Cancelado"
}
