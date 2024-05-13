const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

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
    adPurpose: [String], // Since this could be an array
    selectedGender: [String], // Since this could also be an array
    platform: Number,
    userEmail: String,
    userFirstName: String,
    selectedDate: Date,
    imageURL: String, // URL of the uploaded image
    adAudience: [String],
    selectedPlan: String,
    niche: String,
  },
  { collection: "userdata" } // Collection name for MongoDB
);

// Create a model from the schema
const UserData = mongoose.model("UserData", userDataSchema);

const subscriptionSchema = new mongoose.Schema(
  {
    plan: String,
    userEmail: String,
    status: String,
    start_time: Date,
    end_time: Date,
    ads_count: Number,
  },
  { collection: "Subscription" }
);

const Subscription = mongoose.model("Subscription", subscriptionSchema);

app.post("/userdata", async (req, res) => {
  const data = req.body;

  try {
    const selectedDateTime = dayjs(data.selectedDate, "MM/DD/YYYY hh:mm A", "Asia/Karachi");

    const utcDateTime = selectedDateTime.utc().toDate();

    const newData = { ...data, selectedDate: utcDateTime };

    const newUserData = new UserData(newData);
    await newUserData.save();
    res.status(201).json({ message: "Data saved successfully." });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data." });
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


app.post("/subscription", async (req, res) => {
  const data = req.body;

  try {
    const newUsersubsc = new Subscription(data); // Create a new document from the data
    await newUsersubsc.save(); // Save to MongoDB
    res.status(201).json({ message: "Data saved successfully." }); // Success response
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data." }); // Error response
  }
});




app.get('/subscription/:userEmail', async (req, res) => {
  try {
    const userEmail = req.params.userEmail; // Get user email from request parameters
    
    const subscription = await Subscription.findOne({ userEmail });

    if (subscription) {
      res.status(200).json({ exist: true, subscription });
    } else {
      res.status(200).json({ exist: false });
    }
  } catch (error) {
    console.error("Error fetching subscription data:", error);
    res.status(500).json({ error: "An error occurred while fetching subscription data" });
  }
});

app.listen(3000, () => {
  console.log("Express server running on port 3000.");
});


