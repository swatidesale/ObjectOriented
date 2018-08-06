/******************************************************************************
 *  
 *  Purpose: Clinique Management Program.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   01-08-2018
 *
 ******************************************************************************/
var CliniqueManager = require('./CliniqueManager.js');
var DisplayClinique = require('./DisplayClinique.js');
var SearchClinique = require('./SearchClinique.js');
var menu = require('./menu.js');

var utility = require('./utility');
var input = utility.userInput();

let displayClinique = new DisplayClinique();
let clinicManager = new CliniqueManager();
let searchClinique = new SearchClinique();

menu.cliniqueOperations();
/*
 * setPrompt() to prompt user for input.
 */ 
input.setPrompt('choice> ');
input.prompt();
input.on('line', function(line) {
    /*
     * if type 0 then close program.
     */
    if (line === "0") {
        input.close();
    }
    /*
     * if type 1 then call addPatientDetails().
     */
    else if(line === '1') {
        clinicManager.addPatientDetails(input);
    }
    /*
     * if type 2 then call addDoctorDetails().
     */
    else if(line === '2') {
        clinicManager.addDoctorDetails(input);
    }
    /*
     * if type 3 then call displayPatients().
     */
    else if(line === '3') {
        displayClinique.displayPatients();
        menu.cliniqueOperations();
        input.prompt();
    }
    /*
     * if type 4 then call displayDoctor().
     */
    else if(line === '4') {
        displayClinique.displayDoctor();
        menu.cliniqueOperations();
        input.prompt();
    }
    /*
     * if type 5 then call searchPatient().
     */
    else if(line === '5') {
        input.question("Enter any details of patient to search : ",(details) => {
            searchClinique.searchPatient(details);
            menu.cliniqueOperations();
            input.prompt();
        });
    }
    /*
     * if type 6 then call searchDoctor().
     */
    else if(line === '6') {
        input.question("Enter any details of doctor to search : ",(details) => {
            searchClinique.searchDoctor(details);
            menu.cliniqueOperations();
            input.prompt();
        });
    }
    /*
     * if type 7 then call takeAppointment().
     */
    else if(line === '7') {
        clinicManager.takeAppointment(input);
        input.prompt();
    }
    /*
     * if type 8 then call displayAppointmentDetails().
     */
    else if(line === '8') {
        displayClinique.displayAppointmentDetails();
        menu.cliniqueOperations();
        input.prompt();
    }
    /*
     * if type 9 then call popularSpecalization().
     */
    else if(line === '9') {
        displayClinique.popularSpecalization();
        menu.cliniqueOperations();
        input.prompt();
    }
    /*
     * if type 10 then call popularDoctor.
     */
    else if(line === '10') {
        displayClinique.popularDoctor();
        menu.cliniqueOperations();
       input.prompt();
    }
    else {
        console.log("Enter correct choice");
        menu.cliniqueOperations();
        input.prompt();
    }
}).on('close',function(){
    process.exit(0);
});

