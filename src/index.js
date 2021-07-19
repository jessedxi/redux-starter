const person = {
  name: "John",
  address: {
    country: "USA",
    city: "Sam Francisco",
  },
};
const updated = {
  ...person,
  address: { ...person.address, city: "New York" },
  name: "Bob",
};
updated.address.city = "New York";
console.log(person);
console.log(updated);
