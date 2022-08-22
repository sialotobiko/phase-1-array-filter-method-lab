// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, str1){
    const matchingDrivers = array.filter(x => x.toLowerCase().includes(str1.toLowerCase()));
	return matchingDrivers;
}

function fuzzyMatch(array, str2) {
	const length = str2.length;
	const matching = array.filter(y => y.slice(0, length) === str2);
	return matching;
}

function matchName(array, str3) {
	const matchingDriverNames = array.filter(z => z.name === str3);
	return matchingDriverNames;
}