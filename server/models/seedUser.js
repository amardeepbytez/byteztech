const mongoose = require("mongoose");
const user_model = require("./user_collection.js");


mongoose.connect("mongodb://127.0.0.1:27017/Bytez", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dummyUsers = [
  {
    name: "wolfgang pauli",
    email: "wolfgang@example.com",
    userId: "wolfgang123",
    password: "password123",
    profilePicture: "https://example.com/profile/wolfgang.jpg",
    contacts: {
      phone: "123-456-7890",
      address: "123 Main St, wolfgang City",
    },
    userType: "customer",
    bookings: [],
  },
];


user_model.insertMany(dummyUsers)
  .then((result) => {
    console.log("Dummy data inserted successfully:", result);
  })
  .catch((error) => {
    console.error("Error inserting dummy data:", error);
  })
  .finally(() => {
    mongoose.connection.close();
  });
