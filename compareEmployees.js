function compareEmployees( employee1, employee2 ) {
    if ( employee1.worked.lenght > employee2.worked.lenght) { 
console.log(employee1.name + " " + employee1.LastName + "  Worked in more companies ");
printCompanyList( employee1 );
} else if ( employee2.worked.lenght > employee1.worked.lenght ) {
    console.log(employee2.name + " " + employee2.LastName + "  Worked in more companies ");
    printCompanyList( employee2 );  
}  else {
    console.log("Employee1 and employee2 worked in the same number of companies");
      printCompanyList(employee1);
      printCompanyList(employee2);
}
}
function printCompanyList( employee) {
    console.log( employee.name + " " + employee.lastName + " worked in the following companies:" );
    for (let i = 0; i < employee.worked.length; i++) {
        console.log("- " + employee.worked[i]); 
    }
}

const employee1 = {
    name: "Olivia",
    lastName: "Grow",
    age: 24,
    worked: ["Taco Bell", "TopCrop", "Amex", "Jeep"]
  }
  
  const employee2 = {
    name: "Conrod",
    lastName: "Drew",
    age: 27,
    worked: ["Crysler", "Tomato Corp", "Visual Stuff", "Lavander Inc",]
  }
  
  compareEmployees(employee1, employee2);