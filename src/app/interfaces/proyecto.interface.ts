import { Lenguaje } from "./lenguaje.interface"


export interface Proyecto {
    titulo:string
    descripcion:string
    listLenguajes: Lenguaje[]
    portada:string
}