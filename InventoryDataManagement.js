/******************************************************************************
 *  
 *  Purpose: JSON Inventory Data Management of Rice, Pulses and Wheats.
 *
 *  @author  Swati Desale
 *  @version 1.0
 *  @since   30-07-2018
 *
 ******************************************************************************/
var readline = require('readline');
const fs = require('fs');
var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inventory = {}
console.log("0. Exit ");
console.log("1. Rice Details");
console.log("2. Pulses Details");
console.log("3. Wheats Details");
/*
 * Prompt user to new prompt for input choice
 */ 
read.setPrompt('choice> ');
read.prompt();
read.on('line', function(line) {
    /*
     * Close Program.
     */ 
    if (line === "0") {

        read.close();
    }
    /*
     * Read details of rice and save into 'inventoryData.json'.
     */ 
    else if(line === '1') {
        read.question("Enter Rice name : ",(riceName) => {
            read.question("Enter weight of rice in kg. : ",(riceWeight) => {
                read.question("Enter Rice price per kg. : ",(ricePrice) => {
                    var riceAmount = riceWeight*ricePrice;
    
                    let riceData = fs.readFileSync('inventoryData.json');
                    inventory = JSON.parse(riceData);

                    inventory.rice.push  ({
                        name: riceName,
                        weight: riceWeight,
                        price: ricePrice,
                        amount: riceAmount
                    });

                    fs.writeFile ("inventoryData.json", JSON.stringify(inventory,null,2), function(err) {
                        if (err) throw err;
                        console.log('Sucessfully Uploaded....');
                        console.log(JSON.stringify(inventory));
                        read.prompt();
                    });
                });
            });
        });
    }
    /*
     * Read details of pulses and save into 'inventoryData.json'.
     */ 
    else if(line === '2') {
        read.question("Enter Pulse name : ",(pulseName) => {
            read.question("Enter weight of pulse in kg. : ",(pulseWeight) => {
                read.question("Enter pulse price per kg. : ",(pulsePrice) => {
                    var pulseAmount = pulseWeight*pulsePrice;
    
                    let pulsesData = fs.readFileSync('inventoryData.json');
                    inventory = JSON.parse(pulsesData);

                    inventory.pulse.push({
                        name: pulseName,
                        weight: pulseWeight,
                        price: pulsePrice,
                        amount: pulseAmount
                    });
    
                   fs.writeFile ("inventoryData.json", JSON.stringify(inventory,null,2), function(err) {
                        if (err) throw err;
                        console.log('Sucessfully Uploaded....');
                        console.log(JSON.stringify(inventory));
                        read.prompt();
                    });
                });
            });
        });
    }
    /*
     * Read details of wheats and save into 'inventoryData.json'.
     */ 
    else if(line === '3') {
        read.question("Enter wheat name : ",(wheatName) => {
            read.question("Enter weight of wheat in kg. : ",(wheatWeight) => {
                read.question("Enter wheat price per kg. : ",(wheatPrice) => {
                    var wheatAmount = wheatWeight*wheatPrice;
    
                    let wheatData = fs.readFileSync('inventoryData.json');
                    inventory = JSON.parse(wheatData);

                    inventory.wheat.push({
                        name: wheatName,
                        weight: wheatWeight,
                        price: wheatPrice,
                        amount: wheatAmount
                    });

                    fs.writeFile ("inventoryData.json", JSON.stringify(inventory,null,2), function(err) {
                        if (err) throw err;
                        console.log('Sucessfully Uploaded....');
                        console.log(JSON.stringify(inventory));
                        read.prompt();
                    });
                });
            });
        });
    }

    else {
        console.log("Enter correct option");
        read.prompt();
    }
}).on('close',function(){
    process.exit(0);
});
