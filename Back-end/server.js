const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors"); 

const app = express();


app.use(cors()); 

app.use(bodyParser.json());

const uri = "mongodb+srv://qamshi69:5EjI05z8Fbkr79gT@cluster0.eulkllh.mongodb.net/Customers";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => {
  console.log("MongoDB connected successfully.");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

//This schema is for Authentication  
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
  },
  { collection: "Authentication" } // This sets the collection name explicitly
);

const User = mongoose.model("User", userSchema); // Model name doesn't affect collection name


const userDataSchema = new mongoose.Schema(
  {
    productName: String,
    websiteURL: String,
    phoneNumber: String,
    productDescription: String,
    ageBracket: String,
    priceRange: String,
    adPurpose: [String], // Since this could be an array
    selectedGender: [String], // Since this could also be an array
    platform: Number,
    userEmail: String,
    userFirstName: String,
    imageURL: String, // URL of the uploaded image
  },
  { collection: "userdata" } // Collection name for MongoDB
);

// Create a model from the schema
const UserData = mongoose.model("UserData", userDataSchema);




app.post("/userdata", async (req, res) => {
  const data = req.body;

  try {
    const newUserData = new UserData(data); // Create a new document from the data
    await newUserData.save(); // Save to MongoDB
    res.status(201).json({ message: "Data saved successfully." }); // Success response
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data." }); // Error response
  }
});





app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ error: "Email already exists." });
    } else {
      res.status(500).json({ error: "Internal server error." });
    }
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    // Authentication successful
    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(3000, () => {
  console.log("Express server running on port 3000.");
});





