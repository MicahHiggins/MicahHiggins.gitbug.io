//Problem 1
const Employees = {
    emps: [
        {
            name: "Sam",
            department:"Tech",
            designation:"Manager",
            salary:40000,
            raise_eligible: "true"
        },
        {
            name: "Mary",
            department: "Finance",
            designation:"Trainee",
            salary: 18500,
            raise_eligible: "true"
        },
        {
            name: "Bill",
            department:"HR",
            designation:"Executive",
            salary:21200,
            raise_eligible: "false"
        }
    ]
}
console.log("Problem 1");
console.log(Employees);
//Problem 2
const Company = {
            companyName: "Tech Stars",
            website: "www.techstars.site",
            employees: Employees
}
console.log("Problem 2");
console.log(Company);
//Problem 3
Employees.emps[3] = {
    name: "Anna",
    department:"Tech",
    designation:"Executive",
    salary:25600,
    raise_eligible: "false"
}
console.log("Problem 3");
console.log(Employees);
//Problem 4
let total = 0;

for (var i = 0; i <= Employees.emps.length -1; i++) {
    let Sal = Employees.emps[i].salary;
    total = total + Sal;   
}
console.log("Problem 4");
console.log(total);
//Problem 5

for (var i = 0; i <= Company.employees.emps.length -1; i++) {
    if ((Employees.emps[i].raise_eligible) == 'true') {
        Company.employees.emps[i].salary = Employees.emps[i].salary + (Employees.emps[i].salary * 0.1)
        Company.employees.emps[i].raise_eligible = 'false'
    }
}
console.log("Problem 5");
console.log(Employees)
//Problem 6
for (var i = 0; i <= Employees.emps.length -1; i++) {
    
    
    if (Employees.emps[i].name === "Sam" || Employees.emps[i].name === "Anna") {
        Employees.emps[i].wfh = "true"
    }     
    else {
        Employees.emps[i].wfh = "false"
    }
}
console.log("Problem 6");
console.log(Employees)