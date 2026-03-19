import { camisetas } from '../data/camisetas.js';

export function getAll(){
    return camisetas.map(({ imagenes, tags, ...rest }) => rest);
}

export function getByID(id){
    return camisetas.find(c => c.id == id);
}