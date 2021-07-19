const person = {
  name: "John",
  address: {
    country: "USA",
    city: "Sam Francisco",
  },
};
const updated = { ...person, name: "Bob" };
updated.address.city = "New York";
console.log(person);
