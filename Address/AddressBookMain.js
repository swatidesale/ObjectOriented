/******************************************************************************
 *  
 *  Purpose: Address book Implementataion.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   31-08-2018
 *
 ******************************************************************************/
var utility = require('./utility.js');
var person = require('./Person.js');
var AddressBook = require('./AddressBook.js');
var input = utility.userInput();
let obj = new AddressBook();

/*
 * Function to display operations of Address Book.
 */ 
function menu() {
console.log("---------Address Book Operations--------");
console.log("\t0. Close File and Exit");
console.log("\t1. Add New Person and Save");
console.log("\t2. Edit Person Data");
console.log("\t3. Delete a Person");
console.log("\t4. Sort by Last Name");
console.log("\t5. Sort by ZIP");
console.log("\t6. Print all Entries");
}
menu();
/*
 * Prompt user to take choice for operations.
 */ 
input.setPrompt('choice> ');
input.prompt();
input.on('line', function(line) {
    if (line === "0") {
        input.close();
    }
    /*
     * Take user input for address book.
     */ 
    else if(line === '1') {
        input.question("Enter first name : ",(fname) => {
            person.setFirstName(fname);
            input.question("Enter last name : ",(lname) => {
                person.setLastName(lname);
                input.question("Enter address : ",(address) => {
                    person.setAddress(address);
                    input.question("Enter city : ",(city) => {
                        person.setCity(city);
                        input.question("Enter state : ",(state) => {
                            person.setState(state);
                            input.question("Enter zip code : ",(zip) => {
                                person.setZip(zip);
                                input.question("Enter phone number : ",(phone) => {
                                    person.setPhone(phone);
                                    obj.addPerson(person,input);
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    /*
     * Call editPersonInformation() to edit person data.
     */ 
    else if(line === '2') {
        input.question("Enter fristname of person to edit contact : ",(fname) => {
            obj.editPersonInformation(input,fname);
        })
    }
    /*
     * Call deletePerson() to delete a  person data.
     */     
    else if(line === '3') {
        input.question("Enter fristname of person to delete contact : ",(fname) => {
            obj.deletePerson(fname);
            menu();
            input.prompt();
        })
    }
    /*
     * Call sortByLastName() to sort address book by lastname.
     */       
    else if(line === '4') {
        obj.sortByLastName();
        menu();
        input.prompt();
    }
    /*
     * Call sortByZip() to sort address book by zip code.
     */   
    else if(line === '5') {
        obj.sortByZip();
        menu();
        input.prompt();
    }
    /*
     * Call printEntries() to print all details of address book.
     */   
    else if(line === '6') {
        obj.printEntries();
        menu();
        input.prompt();
    }
    else {
        console.log("Enter correct choice");
        menu();
        input.prompt();
    }
}).on('close',function(){
    process.exit(0);
});

