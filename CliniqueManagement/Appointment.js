/*
 * Module for Appointment Information (POJO).
 */
module.exports = class Appointment {
    constructor(doctor,patient,date) {
        this.doctor = doctor;
        this.patient = patient;
        this.date = date;
    } 

    setDoctor(doctor) {
        this.doctor = doctor; 
    }
    setPatient(patient) {
        this.patient = patient;
    }
    setDate(date) {
        this.date = date;
    }

    getDoctor() {
        return this.doctor; 
    }
    getPatient() {
        return this.patient;
    }
    getDate() {
        return this.date;
    }
} 