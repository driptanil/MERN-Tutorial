const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/userInfo")
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const user = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
  adult: Boolean,
});

const User = mongoose.model("User", user);

const addNewUser = async () => {
  const newUser = new User({
    name: "Driptanil",
    email: "driprecovery@gmail.com",
    age: 20,
    adult: false,
  });
  await newUser.save();
  console.log("Inserted Successfully using save()");
};

const createNewUser = async () => {
  const newUser = await User.create({
    name: "Drip",
    email: "drip@drippy.dev",
    age: 20,
    adult: false,
  });
  console.log("Inserted Successfully using create()");
};

addNewUser();
createNewUser();
