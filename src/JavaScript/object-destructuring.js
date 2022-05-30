
const address = {
    street : '',
    city : '',
    country : ''
};

{/*const street = address.street;
const city = address.city;
const country = address.country;*/}

// we can rewrite the above three lines of code as: 

const { street, city, country } = address;

//if we want to set the aliases we can do that as well:

const {street: st, city: ci, country: co} = address;