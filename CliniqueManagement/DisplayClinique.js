/*
 * Class to display Clinique Information
 */ 
var Doctor = require('./Doctor.js');
var fs = require('fs');

module.exports = class DisplayClinique {
    constructor() {

    }
    /*
     * Function to read patient information from patient.json and display 
     */ 
    displayPatients() {
        let patientData = fs.readFileSync('./patient.json');  
        let patientDetails = JSON.parse(patientData);  
        var patients = patientDetails.patient;
        console.log("\n-------------------------------------------------------------------------");
        console.log("                            Displaying Patient Details                     ");
        console.log("-------------------------------------------------------------------------");
        console.log("Id\tName\t\tMobile Number\tAge");
        console.log("-------------------------------------------------------------------------");
        patients.forEach(function(patient) {
            console.log(patient.id+"\t"+patient.name+"\t\t"+patient.phone+"\t"+patient.age);
        });
    }
    /*
     * Function to read doctor information from doctor.json and display 
     */ 
    displayDoctor() {
        let doctorData = fs.readFileSync('./doctor.json');  
        let doctorDetails = JSON.parse(doctorData); 
        var doctors = doctorDetails.doctor;
        console.log("\n-------------------------------------------------------------------------");
        console.log("                            Displaying Doctor Details                     ");
        console.log("-------------------------------------------------------------------------");
        console.log("Id\tName\t\tSpcialization\tAvailability");
        console.log("-------------------------------------------------------------------------");
        doctors.forEach(function(doctor) {
            console.log(doctor.id+"\t"+doctor.name+"\t\t"+doctor.specialization+"\t\t"+doctor.availability);
        });
    }
    /*
     * Function to read appointment details from appointment.json and display 
     */ 
    displayAppointmentDetails() {
        let appointmentData = fs.readFileSync('./appointment.json');  
        let appointmentDetails = JSON.parse(appointmentData); 
        var appointment = appointmentDetails.appointment;
        console.log("\n--------------------------------------------------------------------------------------------------------------------------------------------------------");
        console.log("                                               Displaying Appointment Details                                               ");
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------");
        console.log("Doctor Id\tDoctor Name\tSpcialization\tAvailability\tPatient Id\tPatient Name\tMobile Number\tPatient Age\tAppointment Date");
        console.log("-----------------------------------------------------------------------------------------------------------------------------------------------------------");
        appointment.forEach(function(appoint) {
            console.log(appoint.doctor.id+"\t\t"+appoint.doctor.name+"\t\t"+appoint.doctor.specialization+"\t\t"+appoint.doctor.availability+"\t\t"+appoint.patient.id+"\t\t"+appoint.patient.name+"\t\t"+appoint.patient.phone+"\t\t"+appoint.patient.age+"\t"+appoint.date);
        });
    }
    /*
     * Function to find popoular specialization of Clinique and display 
     */ 
    popularSpecalization() {
        let doctorData = fs.readFileSync('./doctor.json');  
        let doctorDetails = JSON.parse(doctorData); 
        var doctors = doctorDetails.doctor;

        let appointmentData = fs.readFileSync('./appointment.json');  
        let appointmentDetails = JSON.parse(appointmentData); 
        var appointment = appointmentDetails.appointment;

        let docObject = new Doctor();
        var count = 0;
        doctors.forEach(function(doctor) {
            appointment.forEach(function(appoint) {
                 if(doctor.id === appoint.doctor.id && doctor.name === appoint.doctor.name && doctor.specialization === appoint.doctor.specialization) {
                    count++;
                    docObject.setName(doctor.name);
                    docObject.setSpecialization(doctor.specialization);
                }
            })
        });

        if(count >= 5) {
            console.log("Popular Specialization in Our Clinique : ");
            console.log("Dr. "+docObject.getName()+" "+docObject.getSpecialization()+" Specialist");
        }
    }
    /*
     * Function to find popoular doctor of Clinique and display 
     */ 
    popularDoctor() {
        let doctorData = fs.readFileSync('./doctor.json');  
        let doctorDetails = JSON.parse(doctorData); 
        var doctors = doctorDetails.doctor;

        let appointmentData = fs.readFileSync('./appointment.json');  
        let appointmentDetails = JSON.parse(appointmentData); 
        var appointment = appointmentDetails.appointment;

        let docObject = new Doctor();
        var count = 0;
        doctors.forEach(function(doctor) {
            appointment.forEach(function(appoint) {
                 if(doctor.id === appoint.doctor.id && doctor.name === appoint.doctor.name && doctor.specialization === appoint.doctor.specialization) {
                    count++;
                    docObject.setName(doctor.name);
                    docObject.setSpecialization(doctor.specialization);
                }
            })
        });

        if(count >= 5) {
            console.log("Popular Doctor in Our Clinique : ");
            console.log("Dr. "+docObject.getName()+" "+docObject.getSpecialization()+" Specialist");
        }
    }
}