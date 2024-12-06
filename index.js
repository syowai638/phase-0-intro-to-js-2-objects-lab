let employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, // Copy existing properties
      [key]: value, // Add/Update the given key with the new value
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutate the original object
    return employee; // Return the updated object
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Clone the original object
    delete newEmployee[key]; // Remove the specified key
    return newEmployee; // Return the new object
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly delete the key
    return employee; // Return the modified object
  }
    
  