const names = ["Aarav Mehta", "Sonia Vance", "Li Wei", "Elena Rossi", "Hiroshi Sato", "Amara Okoro", "Mateo Silva", "Clara Müller", "Jean-Pierre", "Sarah Jenkins"];
const salaries = [95000, 82000, 105000, 76000, 115000, 68000, 89000, 98000, 72000, 125000];
const languages = ["JavaScript", "Python", "C++", "Java", "Rust", "Go", "TypeScript", "Swift", "PHP", "Ruby"];
const cities = ["Bangalore", "San Francisco", "Beijing", "Rome", "Tokyo", "Lagos", "Sao Paulo", "Berlin", "Paris", "London"];
const isManager = [true, false, true, false, true, false, false, true, false, true];

function GenerateRandomEmployees(count = 10 ) {
let randomEmployees = [];
for ( let i = 0; i < count; i++) {
    randomEmployees.push({
        name: names[Math.floor(Math.random() * names.length)],
        Salary: salaries[Math.floor(Math.random() * salaries.length)],
        Language: languages[Math.floor(Math.random() * languages.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        isManager: isManager[Math.floor(Math.random() * isManager.length)]
    })
}
    return randomEmployees;
}
export default GenerateRandomEmployees;