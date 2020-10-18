import  * as fs from 'fs';

const employees = [];
employees.push({
    "name" : "Hussein",
    "salary" : 1000,
    "id" : 1
});

const ahmed = {
    "name" : "Ahmend",
    "salary" : 9000,
    "id" : 1002
}
employees.push(ahmed);

employees.push({
    "name" : "Hussein",
    "salary" : 1000,
    "id" : 1
});

console.log(JSON.stringify(employees));

var dir = './data';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.writeFileSync('./data/employees.json', JSON.stringify(employees), 'utf8'); //wrting this to an external file(.json) has a memory space of 125B