import { notas, nextId } from '../data/nota.js';
import * as studentsService from '../services/students.service.js';

function validateNota(obj){
    if (!obj || typeof obj !== "object") return "Body inválido";
    if (!obj.id || !obj.studentId || !obj.modulo || !obj.nota) return "Faltan campos: id, nombre, curso";
    validaNota(obj.nota);
    return null;
}

const existNotaId = (id) => nota.some(n => n.id === id);
const existStudent = (studentId) => studentsService.getById(studentId) ? true : false;

export function getAll() {
    return notas;
}

export function getById(id) {
    return notas.find(s => s.id === id);
}

export function getByStudentId(studentId) {
    return notas.filter(s => s.studentId === studentId);
}

export function create(notaNew){
    const validaNota = validateNota(notaNew);
    if(validaNota) return { error: validaNota };

    if(existNotaId(notaNew.id)) return { error: "id ya existe", status: 409 };
    if(!existStudent(notaNew.studentId)) return { error: "No existeix aquest alumne", status: 409 };

    notas.push({id: nextId, studentId: notaNew.studentId, modulo: notaNew.modulo, nota: notaNew.nota});
    augmentaNextId();
    return { data: notaNew }
}

export function update(id, payload) {
    const idx = notas.findIndex(s => s.id === id);
    if (idx === -1) return null;
    validateNota(payload.nota);
    if (payload && typeof payload === "object") {
        if (payload.studentId !== undefined) notas[idx].studentId = payload.studentId;
        if (payload.modulo !== undefined) notas[idx].modulo = payload.modulo;
        if (payload.nota !== undefined) notas[idx].nota = payload.nota;
    }

    return students[idx];
}

export function remove(id) {
    const before = notas.length;
    const filtered = notas.filter(s => s.id !== id);

    if (filtered.length === before) return false;

    notas.length = 0;
    notas.push(...filtered);
    return true;
}

function validaNota(n){
    return n <= 10 && n >=0 ? true : { error: "invalido" };
}

function augmentaNextId(){
    nextId = nextId + 1;
}

