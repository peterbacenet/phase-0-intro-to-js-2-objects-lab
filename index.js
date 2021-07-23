let employee = { 
    streetAddress: '',
    name: ''
}
function updateEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign({}, employee, {[key]:value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {[key] : value})
}
function deleteFromEmployeeByKey(employee, key) {
    return Object.assign({}, employee.value)
}
function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    const newObject = (employee)
    delete newObject[key]
    return newObject
}

