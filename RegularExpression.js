/******************************************************************************
 *  
 *  Purpose: Regular Expression Demonstration.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   30-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
var datetime = require('node-datetime');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

regularExpressions();
/*
 * Function to replace string data withu user's valid data.
 */
function regularExpressions() {
    let string1 = "Hello <<name>>, We have your full name as <<fullname>> " 
    + "in our system your contact number is 91-xxxxxxxxxx.";
    let string2 = "Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.";
    /*
     * Read user information.
     */
    read.question("Enter your name : ",(name) => {
        read.question("Enter your full name : ",(fullname) => {
            read.question("Enter your contact : ",(contact) => {
                /*
                 * To take current date by system.
                 */
                var date = datetime.create();
                var today = date.format('d/m/Y');
                /*
                 * Check for data validation and if valid then replace data with string.
                 */
                if(nameValidation(name) && fullNameValidation(fullname) && contactValidation(contact) ) {
                    string1 = string1.replace('<<name>>',name);
                    string1 = string1.replace('<<fullname>>',fullname);
                    string1 = string1.replace('xxxxxxxxxx',contact);
                    string2 = string2.replace('01/01/2016',today);
                    console.log(string1);
                    console.log(string2);                        
                }
                else {
                    console.log("Enter valid details");
                }
            });
        });
    });
}
/*
 * Function to check name validation.
 * 
 * @return
 */
function nameValidation(name) {
    if(name.match(/^[a-zA-Z ]+$/))
        return true;
    else
        return false;
}
/*
 * Function to check full name validation.
 * 
 * @return
 */
function fullNameValidation(fullname) {
    if(fullname.match(/^[a-zA-Z ]+$/))
        return true;
    else
        return false;
}
/*
 * Function to check contact validation.
 * 
 * @return
 */
function contactValidation(contact) {
    if(contact.match(/[789]{1}[0-9]{9}/))
        return true;
    else 
        return false;
}
