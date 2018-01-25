// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function accountInfo(name, phoneNumber, business) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${phoneNumber}`);
    console.log(`Business Name: ${business}`);
}


// Add function to print all addresses, including a header

function showAddresses(address) {
    console.log("Addresses: ")
    for (let i = 0; i < address.length; i += 1) {
        console.log(address[i]);
    }
}


// Add function to print phone types and numbers

function showPhones(phoneNums) {
    console.log("Phone Numbers: ");
    for (let [type, number] of phoneNums) {
        console.log(type + ": " + number);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
const transactions = new Map([
['May-2', -500], ['May-13', +1200], ['May-15', -100], ['May-21', -359],
['May-29', +2200]
]);

// Add function to add transactions
function addTransaction(date, amount) {
    transactions
}

// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info


// Function to add customer attributes


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours






