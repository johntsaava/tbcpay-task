export const filterUsers = (filters, users) => {
  // step 1
  const textFilters = {
    firstName: filters.firstName.toLowerCase(),
    lastName: filters.lastName.toLowerCase(),
    idNumber: filters.idNumber.toLowerCase(),
    address: filters.address.toLowerCase()
  };

  for (let filter in textFilters) {
    if (!textFilters[filter]) continue;
    users = users.filter(user =>
      user[filter].toLowerCase().includes(textFilters[filter])
    );
  }

  // step 2
  const selectFilters = {
    gender: filters.gender,
    birthplace: filters.birthplace
  };

  for (let filter in selectFilters) {
    if (!selectFilters[filter]) continue;
    users = users.filter(user => user[filter] === selectFilters[filter]);
  }

  // step 3
  const dateFilters = {
    birthDateFrom: new Date(filters.birthDateFrom).getTime(),
    birthDateTo: new Date(filters.birthDateTo).getTime()
  };

  users = users.filter(user => {
    const userbirthDate = new Date(user["birthDate"]).getTime();
    return (
      userbirthDate >= dateFilters.birthDateFrom &&
      userbirthDate <= dateFilters.birthDateTo
    );
  });

  return users;
};

export const validateUserInputs = values => {
  const errors = {};

  for (let name in values) {
    if (!values[name]) errors[name] = "Required";
    if (name === "idNumber" && values[name].length !== 11)
      errors[name] = "must be exactly 11 characters";
  }

  return Object.keys(errors).length ? errors : null;
};
