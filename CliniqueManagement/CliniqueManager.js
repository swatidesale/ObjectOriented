/*
 * Class to implement Clinique Management Operations
 */ 
var DisplayClinique = require('./DisplayClinique.js');
var Appointment = require('./Appointment.js');
var Patient = require('./Patient.js');
var Doctor = require('./Doctor.js');
var menu = require('./menu.js');
var fs = require('fs');

let displayClinique = new DisplayClinique();
var appointmentDetails = {};
var patientDetails = {};
var doctorDetails = {};

module.exports = class CliniqueManager {
    constructor() {
        
    }
    /*
     * Function to read patient details from user and save into patient.json file
     */ 
    addPatientDetails(input) {
        let patient = new Patient();
        input.question("\nEnter Patient Name : ",(name) => {
            patient.setName(name);
            input.question("Enter Patient Id : ",(id) => {
                patient.setId(id);
                input.question("Enter Patient mobile number : ",(mobile) => {
                    patient.setMobile(mobile);
                    input.question("Enter Patient Age : ",(age) => {
                        patient.setAge(age);

                        fs.readFile('./patient.json', 'utf-8', function(err, data) {
                            if (err) throw err
                
                            patientDetails = JSON.parse(data)
                            patientDetails.patient.push({
                                id: patient.getId(),
                                name: patient.getName(),
                                phone: patient.getMobile(),
                                age: patient.getAge()
                            });
                
                            fs.writeFile('./patient.json', JSON.stringify(patientDetails,null,4), 'utf-8', function(err) {
                                if (err) throw err
                                console.log('\nPatient Details Saved Successfully....\n');
                                menu.cliniqueOperations();
                                input.prompt();
                            });
                        });
                    });
                });
            });
        });
    }
    /*
     * Function to read doctor details from user and save into doctor.json file
     */ 
    addDoctorDetails(input) {
        let doctor = new Doctor();
        input.question("\nEnter Doctor Name : ",(name) => {
            doctor.setName(name);
            input.question("Enter Doctor Id : ",(id) => {
                doctor.setId(id);
                input.question("Enter doctor Specialization : ",(specialization) => {
                    doctor.setSpecialization(specialization);
                    input.question("Enter Doctor Availability : ",(availability) => {
                        doctor.setAvailability(availability);

                        fs.readFile('./doctor.json', 'utf-8', function(err, data) {
                            if (err) throw err
                
                            doctorDetails = JSON.parse(data)
                            doctorDetails.doctor.push({
                                id: doctor.getId(),
                                name: doctor.getName(),
                                specialization: doctor.getSpecialization(),
                                availability: doctor.getAvailability()
                            });
                
                            fs.writeFile('./doctor.json', JSON.stringify(doctorDetails,null,4), 'utf-8', function(err) {
                                if (err) throw err
                                console.log('\nDocotr Details Saved Successfully....\n');
                                menu.cliniqueOperations();
                                input.prompt();
                            });
                        });
                    });
                });
            });
        });
    }
    /*
     * Function to add appointment details into appointment.json
     */ 
    addAppointmentDetails(doctor,patient,input) {
        let appointment = new Appointment();
        appointment.setDoctor(doctor);
        appointment.setPatient(patient);
        var date = new Date().toISOString().slice(0,10);
        appointment.setDate(date);

        fs.readFile('./appointment.json', 'utf-8', function(err, data) {
            if (err) throw err

            appointmentDetails = JSON.parse(data)
            appointmentDetails.appointment.push({
                doctor: appointment.getDoctor(),
                patient: appointment.getPatient(),
                date: appointment.getDate()
            });

            fs.writeFile('./appointment.json', JSON.stringify(appointmentDetails,null,4), 'utf-8', function(err) {
                if (err) throw err
                console.log('\nDetails Saved Successfully....\n');
                menu.cliniqueOperations();
                input.prompt();
            });
        });
    }
    /*
     * Function to take appointment
     */ 
    takeAppointment(input) {
        var count = 0;
        input.question("Enter any doctor details to search : ",(details) => {
            var doctorAvailable = this.searchDoctor(details);

            if(doctorAvailable !== null) {
                console.log(doctorAvailable.name);
                var doctorName = doctorAvailable.name;
                
                let appointmentData = fs.readFileSync('./appointment.json');  
                let appointmentDetails = JSON.parse(appointmentData);  
                var appointment = appointmentDetails.appointment;
                appointment.forEach(function(appoint) {
                    if(doctorAvailable.name === appoint.doctor.name && doctorAvailable.id === appoint.doctor.id) {
                        count++;
                    }
                });
                console.log("Dr. "+doctorName+" had "+count+" appoinments");
                if(count < 5) {
                    input.question("Enter any patient details to search : ",(patientDetails) => {
                        var patientAvailabile = this.searchPatient(patientDetails);
                        if(patientAvailabile !== null) {
                            console.log(patientAvailabile.name);
                            this.addAppointmentDetails(doctorAvailable,patientAvailabile,input);
                            displayClinique.displayAppointmentDetails();
                            input.prompt();
                        }
                        else {
                            console.log("Patients are not there....");
                            input.prompt();
                        }
                    });
                }
                else {
                    console.log("Doctor will not available today....");
                    input.prompt();
                }
            }
            else {
                console.log("Doctor is not available today");
                input.prompt();
            }
        });
    }
    /*
     * Function to search for particular patient
     * 
     * @return
     */ 
    searchPatient(details) {
        var patientName = '';
        var patientId;
        var patientMobile = '';
        var patientAge;

        var count = 0;
        
        let patientData = fs.readFileSync('./patient.json');  
        let patientDetails = JSON.parse(patientData);  
        var patients = patientDetails.patient;

        patients.forEach(function(patient) {
            if(patient.id === details || patient.name === details || patient.phone === details) {
                count ++;
                patientName = patient.name;
                patientId = patient.id;
                patientMobile = patient.phone;
                patientAge = patient.age
            }
        });

        var patientObject = {
            name: patientName,
            id: patientId,
            phone: patientMobile,
            age: patientAge
        }
        if(count === 0) {
            return null;
        }
        else 
            return patientObject;
    }
    /*
     * Function to search for particular doctor
     * 
     * @return
     */ 
    searchDoctor(details) {
        var docName = '';
        var docId;
        var docSpecialization = '';
        var docAvailability = '';

        var count = 0;
        
        let doctorData = fs.readFileSync('./doctor.json');  
        let doctorDetails = JSON.parse(doctorData); 
        var doctors = doctorDetails.doctor;

        doctors.forEach(function(doctor) {
            if(doctor.id === details || doctor.name === details || doctor.specialization === details || doctor.availability ===details) {
                    count++;
                    docName = doctor.name;
                    docId = doctor.id;
                    docSpecialization = doctor.specialization;
                    docAvailability = doctor.availability
            }
        });

        var docObject = {
            name: docName,
            id: docId,
            specialization: docSpecialization,
            availability: docAvailability
        }
        
        if(count === 0) {
            return null;
        }
        else 
            return docObject;
    }
}
