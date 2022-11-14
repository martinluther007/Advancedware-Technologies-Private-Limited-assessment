const editReceivedData = (data) => {
  const {
    id,
    first_name,
    last_name,
    username,
    email,
    avatar,
    gender,
    date_of_birth,
    address,
  } = data;
  const newAddress = { ...address };
  delete newAddress.coordinates;
  const coordinates = Object.values(address.coordinates).join(",");
  newAddress["coordinates"] = coordinates;
  const reformedAddress = Object.values(newAddress).join(" ");

  const reformedData = {
    id,
    FirstName: first_name,
    LastName: last_name,
    Username: username,
    Email: email,
    Avatar: avatar,
    gender,
    DoB: date_of_birth,
    Address: reformedAddress,
  };
  return reformedData;
};

module.exports = editReceivedData;
