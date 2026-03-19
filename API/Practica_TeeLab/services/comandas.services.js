import { comandas } from '../data/comandas.js';

export function getAll(){
    return comandas;
}

export function getByID(id){
    return comandas.find(c => c.id == id);
}