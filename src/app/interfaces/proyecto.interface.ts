import { Lenguaje } from "./lenguaje.interface"


export interface Proyecto {
    titulo:string
    descripcion:string
    listConceptos:string[]
    listLenguajes: Lenguaje[]
    portada:string
    integrantes:number
}