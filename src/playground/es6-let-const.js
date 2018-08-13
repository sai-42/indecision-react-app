var nameVar = 'Sabrina';
var nameVar = 'Alin';
console.log('nameVar', nameVar);

let nameLet = 'Alex';
nameLet = 'Vlad';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
	const petName = 'Olly';
	return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping

const fullName = 'Daniela Moraru';
let firstName;

if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);