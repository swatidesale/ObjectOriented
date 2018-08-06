/*
 * Module for Patient Information (POJO)
 */
module.exports = class Patients {
    constructor(name,id,mobile,age) {
        this.name = name;
        this.id = id;
        this.mobile = mobile;
        this.age = age;
    }
    setName(name) {
        this.name = name;
    }
    setId(id) {
        this.id = id;
    }
    setMobile(mobile) {
        this.mobile = mobile;
    }
    setAge(age) {
        this.age = age
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getMobile() {
        return this.mobile;
    }
    getAge() {
        return this.age;
    }    
}
