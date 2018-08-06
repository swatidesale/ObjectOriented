/*
 * Person Module for getter and setter.
 */ 
var firstname
var lastname
var address
var city
var state
var zip
var phone

exports.setFirstName = function(firstname) {
    this.firstname = firstname;
}

exports.setLastName = function(lastname) {
    this.lastname = lastname;
}

exports.setAddress = function(address) {
    this.address = address;
}

exports.setCity = function(city) {
    this.city = city;
}

exports.setState = function(state) {
    this.state = state;
}

exports.setZip = function(zip) {
    this.zip = zip;
}

exports.setPhone = function(phone) {
    this.phone = phone
}

exports.getFirstName = function() {
    return this.firstname;
}

exports.getLastName = function(lastname) {
    return this.lastname;
}

exports.getAddress = function(address) {
    return this.address;
}

exports.getCity = function(city) {
    return this.city;
}

exports.getState = function(state) {
    return this.state;
}

exports.getZip = function(zip) {
    return this.zip;
}

exports.getPhone = function(phone) {
    return this.phone;
}

