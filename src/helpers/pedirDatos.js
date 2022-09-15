import { mercado } from "../data/data.js"

export const pedirDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=>{
            resolve(mercado)
        }, 1000)
    })
}