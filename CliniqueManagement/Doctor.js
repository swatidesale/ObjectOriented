/*
 * Module for Doctor Information (POJO).
 */
module.exports = class Doctor {
    constructor(name,id,specialization,availabilty) {
        this.name = name;
        this.id = id;
        this.specialization = specialization;
        this.availabilty = availabilty;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setSpecialization(specialization) {
        this.specialization = specialization;
    }
    setAvailability(availabilty) {
        this.availabilty = availabilty;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getSpecialization() {
        return this.specialization;
    }
    getAvailability() {
        return this.availabilty;
    }
}
