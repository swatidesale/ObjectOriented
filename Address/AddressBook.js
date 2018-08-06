/*
 * Class for Address Book Implementation.
 */ 
var fs = require('fs');
var addressbook = {};
module.exports = class AddressBook {
    constructor() {
       
    }
	/*
	 * Funcion to add information of person and save into file.
	 */
    addPerson(person,input) {
        fs.readFile('./users.json', 'utf-8', function(err, data) {
            if (err) throw err

            addressbook = JSON.parse(data)
            addressbook.users.push({
                firstname: person.getFirstName(),
                lastname: person.getLastName(),
                address: person.getAddress(),
                city: person.getCity(),
                state: person.getState(),
                zip: person.getZip(),
                phone: person.getPhone()
            })

            console.log(addressbook)

            fs.writeFile('./users.json', JSON.stringify(addressbook), 'utf-8', function(err) {
                if (err) throw err
                console.log('Done!')
                input.prompt();
            })
        })
    }
	/*
	 * Funcion to edit information of person and save edited information into file.
	 */
    editPersonInformation(input,fname) {
        var editInformation = function () {
            console.log("\t0. Exit to main page")
            console.log("\t1. Edit Address ");
            console.log("\t2. Edit City ");
            console.log("\t3. Edit State ");
            console.log("\t4. Edit ZIP Code ");
            console.log("\t5. Edit Phone Number\n");

            input.question('edit> ', function (answer) {
                if (answer === '0') 
                    return input.prompt();
                /*
                 * To add new address.
                 */
                else if(answer === '1') {
                    input.question("\nEnter new address : ",(address) => {
                        var data = fs.readFileSync('./users.json');
                        var json = JSON.parse(data);
                        var users = json.users;
                        users.forEach(function(user,index) {
                            if(user.firstname === fname) {
                                user.address = address;
                            }
                        });
                        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));
                        var newData = fs.readFileSync('./users.json');
                        let details = JSON.parse(newData);  
                        console.log("\n-----------Edited By Address-----------\n")
                        console.log(details);
                        editInformation(); 
                    });
                }
                /*
                 * To add new city.
                 */                
                else if(answer === '2') {
                    input.question("Enter new city : ",(city) => {
                        var data = fs.readFileSync('./users.json');
                        var json = JSON.parse(data);
                        var users = json.users;
                        users.forEach(function(user,index) {
                            if(user.firstname === fname) {
                                user.city = city;
                            }
                        });
                        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));
                        var newData = fs.readFileSync('./users.json');
                        let details = JSON.parse(newData);  
                        console.log("\n-----------Editd By City-----------\n")
                        console.log(details);
                        editInformation(); 
                    });
                }
                /*
                 * To add new state.
                 */
                else if(answer === '3') {
                    input.question("Enter new state : ",(state) => {
                        var data = fs.readFileSync('./users.json');
                        var json = JSON.parse(data);
                        var users = json.users;
                        users.forEach(function(user,index) {
                            if(user.firstname === fname) {
                                user.state = state;
                            }
                        });
                        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));
                        var newData = fs.readFileSync('./users.json');
                        let details = JSON.parse(newData);  
                        console.log("\n-----------Editd By State-----------\n")
                        console.log(details);
                        editInformation(); 
                    });
                }
                /*
	             * To add new zip code.
	             */
                else if(answer === '4') {
                    input.question("Enter new zip code : ",(zip) => {
                        var data = fs.readFileSync('./users.json');
                        var json = JSON.parse(data);
                        var users = json.users;
                        users.forEach(function(user,index) {
                            if(user.firstname === fname) {
                                user.zip = zip;
                            }
                        });
                        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));
                        var newData = fs.readFileSync('./users.json');
                        let details = JSON.parse(newData);  
                        console.log("\n-----------Editd By ZIP-----------\n")
                        console.log(details);
                        editInformation(); 
                    });
                }
            	/*
	             * To add new phone number.
	             */
                else if(answer === '5') {
                    input.question("Enter new phone number : ",(phone) => {
                        var data = fs.readFileSync('./users.json');
                        var json = JSON.parse(data);
                        var users = json.users;
                        users.forEach(function(user) {
                            if(user.firstname === fname) {
                                user.phone = phone;
                            }
                        });
                        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));
                        var newData = fs.readFileSync('./users.json');
                        let details = JSON.parse(newData);  
                        console.log("\n-----------Editd By Phone Number-----------\n")
                        console.log(details);
                        editInformation(); 
                    });
                }
             });
        };
        editInformation();
    }
	/*
	 * Funcion to delete information of a person and save updated information into file.
	 */
    deletePerson(fname) {
        var removePerson = fname;
        var data = fs.readFileSync('./users.json');
        var json = JSON.parse(data);
        var users = json.users;
        json.users = users.filter((user) => {
            return user.firstname !== removePerson
        });
        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));

        var newData = fs.readFileSync('./users.json');
        let details = JSON.parse(newData);  
        console.log("\n-----------After Deleting a Person-----------\n")
        console.log(details);
    }
	/*
	 * Funcion to perform sorting.
	 */
    sortByProperty(property) {
        return function(x,y) {
            //return ((x[property] === y[property] ? 0 : ((x[property] > y[property]) ? 1 : -1 )));
            if(x[property] > y[property]) {
                return 1;
            } else if(x[property] < y[property]) {
                return -1;
            } 
            return 0;
        }
    }
	/*
	 * Funcion to sort data by Lastname.
	 */
    sortByLastName() {
        var data = fs.readFileSync('./users.json');
        var json = JSON.parse(data);
        var users = json.users;
        users.sort(this.sortByProperty('lastname'));

        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));
        var newData = fs.readFileSync('./users.json');
        let details = JSON.parse(newData);  
        console.log("\n-----------Sorted By LastName-----------\n");
        console.log(details);
    }
	/*
	 * Funcion to sort data by zip code.
	 */
    sortByZip() {
        var data = fs.readFileSync('./users.json');
        var json = JSON.parse(data);
        var users = json.users;
        users.sort(this.sortByProperty('zip'));

        fs.writeFileSync('./users.json',JSON.stringify(json,null,2));
        var newData = fs.readFileSync('./users.json');
        let details = JSON.parse(newData);  
        console.log("\n-----------Sorted by Zip-----------\n");
        console.log(details);
    }
    /*
	 * Funcion to print all entries of address book.
	 */
    printEntries() {
        let rawdata = fs.readFileSync('./users.json');  
        let details = JSON.parse(rawdata); 
        var persons = details.users;
        console.log("\n--------------------------------------------------------------------------------------------------------------------------");
        console.log("                                           Address Book Details                         ");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
        console.log("First Name\tLast Name\tAddress\t\tCity\t\tState\t\t\tZip Code\tPhone Number");
        console.log("--------------------------------------------------------------------------------------------------------------------------");
        persons.forEach(function(person) {
            console.log(person.firstname+"\t\t"+person.lastname+"\t\t"+person.address+"\t\t"+person.city+"\t\t"+person.state+"\t\t"+person.zip+"\t\t"+person.phone);
        });
        console.log("-------------------------------------------------------------------------------------------------------------------------");
    }
}