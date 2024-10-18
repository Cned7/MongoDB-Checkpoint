//Declaration of variables that will serve as database and collections
const database = "contact";
const collection = "contactList";

// Using the variables to create MongoDB database
use(database);
db.createCollection(collection);

// Creating an array of objects for each person on the contact list
const personalData = [
  { lastName: "Ben", firstName: "Moris", Email: "ben@gmail.com", age: 28 },
  { lastName: "Kefi", firstName: "Seif", Email: "kefi@gmail.com", age: 15 },
  {
    lastName: "Emilie",
    firstName: "Brouge",
    Email: "emilie.b@gmail.com",
    age: 40,
  },
  { lastName: "Alex", firstName: "Brown", age: 28 },
  { lastName: "Denzel", firstName: "Washington", age: 4 },
];

// Inserting multiple objects to the MongoDB database using (inserMany) command
db.contactList.insertMany(personalData);

// To display the entire contact list
db.contactList.find().pretty();

// Display all the information about only one person using his ID.

let contactId = ObjectId("67112dd54a6c3810f8b8af80");
db.contactList.find({ _id: contactId }).pretty();

// To display all contacts with age greater than 18

db.contactList.find({ age: { $gt: 18 } }).pretty();

// To display all contacts with age greater than 18 and containing "ah"

db.contactlist
  .find({
    age: { $gt: 18 },
    firstName: { $regex: "ah" },
  })
  .pretty();

// To change the contact's first name from"Kefi Seif" to "Kefi Anis"

db.contactList.updateOne(
  {
    lastName: "Kefi",
    firstName: "Seif",
  },
  { $set: { firstName: "Anis" } }
);

// To delete the contacts that are aged under <5

db.contactList.deleteMany({ age: { $lt: 5 } });

// To display the contact list again
db.contactList.find().pretty();
