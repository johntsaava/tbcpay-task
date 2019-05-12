import * as yup from "yup";

export const filterUsers = (filters, users) => {
  let visibleUsers = [...users];

  // step 1
  const textFilters = {
    firstName: filters.firstName.toLowerCase(),
    lastName: filters.lastName.toLowerCase(),
    idNumber: filters.idNumber.toLowerCase(),
    address: filters.address.toLowerCase()
  };

  for (let filter in textFilters) {
    visibleUsers = visibleUsers.filter(user =>
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
    visibleUsers = visibleUsers.filter(
      user => user[filter] === selectFilters[filter]
    );
  }

  // step 3
  const dateFilters = {
    birthDateFrom: new Date(filters.birthDateFrom).getTime(),
    birthDateTo: new Date(filters.birthDateTo).getTime()
  };

  visibleUsers = visibleUsers.filter(user => {
    const userbirthDate = new Date(user["birthDate"]).getTime();
    return (
      userbirthDate >= dateFilters.birthDateFrom &&
      userbirthDate <= dateFilters.birthDateTo
    );
  });

  return visibleUsers;
};

export const userInputSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  idNumber: yup
    .string()
    .required()
    .length(11),
  gender: yup.string().required(),
  birthDate: yup.string().required(),
  birthplace: yup.string().required(),
  address: yup.string().required()
});
