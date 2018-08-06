var fs = require('fs');
module.exports = class SearchClinique {
    constructor() {

    }
    /*
     * Function to search for particular patient and display
     * 
     */ 
    searchPatient(details) {
        let patientData = fs.readFileSync('./patient.json');  
        let patientDetails = JSON.parse(patientData);  
        var patients = patientDetails.patient;
        var count = 0;

        patients.forEach(function(patient) {
            if(patient.id === details || patient.name === details || patient.phone === details) {
                count++;
                console.log("\n-------------------------------------------------------------------------");
                console.log("                            Search Results of Patient                    ");
                console.log("-------------------------------------------------------------------------");
                console.log("Id\tName\t\tMobile Number\tAge");
                console.log("-------------------------------------------------------------------------");
                console.log(patient.id+"\t\t"+patient.name+"\t"+patient.phone+"\t"+patient.age);
            }
        });

        if(count == 0) {
            console.log("No Results found ");
        }
    }
    /*
     * Function to search for particular doctor and display
     * 
     */ 
    searchDoctor(details) {
        let doctorData = fs.readFileSync('./doctor.json');  
        let doctorDetails = JSON.parse(doctorData); 
        var doctors = doctorDetails.doctor;
        var count = 0;

        doctors.forEach(function(doctor) {
            if(doctor.id === details || doctor.name === details || 
                doctor.specialization === details || doctor.availability ===details) {
                count++;
                console.log("\n-------------------------------------------------------------------------");
                console.log("                            Search Results of Doctor                      ");
                console.log("-------------------------------------------------------------------------");
                console.log("Id\tName\t\tSpcialization\tAvailability");
                console.log("-------------------------------------------------------------------------");
                console.log(doctor.id+"\t\t"+doctor.name+"\t"+doctor.specialization+"\t\t"
                +doctor.availability);
            }
        });

        if(count == 0) {
            console.log("No Results found ");
        }
    }
}