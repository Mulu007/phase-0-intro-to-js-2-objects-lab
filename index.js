function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]:value};
}

const employee = {
    name : "Ian",
    streetAddress : "58 Buruburu",
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employees = {...employee};
    delete employees[key];
    return employees;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}