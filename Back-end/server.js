// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const bodyParser = require("body-parser");
// const cors = require("cors"); 
// const dayjs = require('dayjs');
// const utc = require('dayjs/plugin/utc');
// const timezone = require('dayjs/plugin/timezone');

// dayjs.extend(utc);
// dayjs.extend(timezone);

// const app = express();


// app.use(cors()); 

// app.use(bodyParser.json());

// const uri = "mongodb+srv://qamshi69:5EjI05z8Fbkr79gT@cluster0.eulkllh.mongodb.net/Customers";
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connection.once("open", () => {
//   console.log("MongoDB connected successfully.");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

// //This schema is for Authentication  
// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: { type: String, unique: true },
//     password: String,
//   },
//   { collection: "Authentication" } // This sets the collection name explicitly
// );

// const User = mongoose.model("User", userSchema); // Model name doesn't affect collection name


// const userDataSchema = new mongoose.Schema(
//   {
//     productName: String,
//     websiteURL: String,
//     phoneNumber: String,
//     productDescription: String,
//     ageBracket: String,
//     adPurpose: [String], // Since this could be an array
//     selectedGender: [String], // Since this could also be an array
//     platform: Number,
//     userEmail: String,
//     userFirstName: String,
//     selectedDate: Date,
//     imageURL: String, // URL of the uploaded image
//     adAudience: [String],
//     selectedPlan: String,
//     niche: String,
//   },
//   { collection: "userdata" } // Collection name for MongoDB
// );

// // Create a model from the schema
// const UserData = mongoose.model("UserData", userDataSchema);

// const subscriptionSchema = new mongoose.Schema(
//   {
//     plan: String,
//     userEmail: String,
//     status: String,
//     start_time: Date,
//     end_time: Date,
//     ads_count: Number,
//   },
//   { collection: "Subscription" }
// );

// const Subscription = mongoose.model("Subscription", subscriptionSchema);

// app.post("/userdata", async (req, res) => {
//   const data = req.body;

//   try {
//     const selectedDateTime = dayjs(data.selectedDate, "MM/DD/YYYY hh:mm A", "Asia/Karachi");

//     const utcDateTime = selectedDateTime.utc().toDate();

//     const newData = { ...data, selectedDate: utcDateTime };

//     const newUserData = new UserData(newData);
//     await newUserData.save();
//     res.status(201).json({ message: "Data saved successfully." });
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ error: "Failed to save data." });
//   }
// });




// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully." });
//   } catch (error) {
//     if (error.code === 11000) {
//       res.status(409).json({ error: "Email already exists." });
//     } else {
//       res.status(500).json({ error: "Internal server error." });
//     }
//   }
// });

// app.post("/signin", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ error: "Invalid email or password." });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Invalid email or password." });
//     }

//     // Authentication successful
//     res.status(200).json({ message: "Login successful." });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error." });
//   }
// });


// app.post("/subscription", async (req, res) => {
//   const data = req.body;

//   try {
//     const newUsersubsc = new Subscription(data); // Create a new document from the data
//     await newUsersubsc.save(); // Save to MongoDB
//     res.status(201).json({ message: "Data saved successfully." }); // Success response
//   } catch (error) {
//     console.error("Error saving data:", error);
//     res.status(500).json({ error: "Failed to save data." }); // Error response
//   }
// });




// app.get('/subscription/:userEmail', async (req, res) => {
//   try {
//     const userEmail = req.params.userEmail; // Get user email from request parameters

//     const subscription = await Subscription.findOne({ userEmail });

//     if (subscription) {
//       res.status(200).json({ exist: true, subscription });
//     } else {
//       res.status(200).json({ exist: false });
//     }
//   } catch (error) {
//     console.error("Error fetching subscription data:", error);
//     res.status(500).json({ error: "An error occurred while fetching subscription data" });
//   }
// });


// app.delete('/subscription/:userEmail', async (req, res) => {
//   try {
//     const userEmail = req.params.userEmail;

//     // Find and delete the subscription by userEmail
//     const result = await Subscription.deleteOne({ userEmail });

//     if (result.deletedCount === 0) {
//       return res.status(404).json({ error: 'Subscription not found' });
//     }

//     res.status(200).json({ message: 'Subscription deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting subscription:', error);
//     res.status(500).json({ error: 'An error occurred while deleting the subscription' });
//   }
// });

// app.listen(3000, () => {
//   console.log("Express server running on port 3000.");
// });






























const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // For generating random OTPs
const path = require('path');
const fs = require('fs');


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

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,
  },
  { collection: "Authentication" }
);

const User = mongoose.model("User", userSchema);

const userDataSchema = new mongoose.Schema(
  {
    productName: String,
    websiteURL: String,
    phoneNumber: String,
    productDescription: String,
    ageBracket: String,
    adPurpose: [String],
    selectedGender: [String],
    platform: Number,
    userEmail: String,
    userFirstName: String,
    selectedDate: Date,
    imageURL: String,
    adAudience: [String],
    selectedPlan: String,
    niche: String,
  },
  { collection: "userdata" }
);

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

// Define the OTP Schema
const otpSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: '10m' } // OTP expires in 10 minutes
  },
  { collection: "otps" }
);

const OTP = mongoose.model("OTP", otpSchema);

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'qamroshmaqsood9@gmail.com', // Replace with your email
    pass: 'lynz rzxj kbia vpiq' // Replace with your email password or app password
  }
});


app.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

  const mailOptions = {
    from: 'qamroshmaqsood9@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");


    // Save OTP to the database
    await OTP.findOneAndUpdate(
      { email },
      { otp, createdAt: Date.now() },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: 'OTP sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email.' });
  }
});

app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await OTP.findOne({ email, otp });

    if (otpRecord) {
      await OTP.deleteOne({ email }); // OTP is valid for one-time use
      res.status(200).json({ message: 'OTP verified successfully.' });
    } else {
      res.status(400).json({ error: 'Invalid OTP.' });
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ error: 'Error verifying OTP.' });
  }
});

app.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ error: 'Email and new password are required.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.findOneAndUpdate({ email }, { password: hashedPassword });
    res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error('Error resetting password:', error);
    res.status(500).json({ error: 'Error resetting password.' });
  }
});

app.post("/userdata", async (req, res) => {
  const data = req.body;

  try {
    const selectedDateTime = dayjs(data.selectedDate, "MM/DD/YYYY hh:mm A", "Asia/Karachi");
    const utcDateTime = selectedDateTime.utc().toDate();

    const newData = { ...data, selectedDate: utcDateTime };

    const newUserData = new UserData(newData);
    await newUserData.save();

    // Email content
    const mailOptions = {
      from: "qamroshmaqsood9@gmail.com", // Sender email address
      to: data.userEmail, // Receiver email address
      subject: `Ad details for ${data.niche}`, // Email subject
      text: `Dear Sir/Madam,
                            Thank you for submitting your ad. It has been sent to our admin team for approval.You will receive an email notification shortly regarding the status of your ad, whether it has been approved or rejected.Your ad Details are mentioned Below. Thank You!
             
Headline: ${data.productName},
Image Link: ${data.imageURL},                
Target Audience: ${data.adAudience},
Ad Purpose: ${data.adPurpose}                
Ad Schedule: ${data.selectedDate},                
Gender: ${data.selectedGender},                
             
Regards,
Market Ease Plus`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }

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

    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    res.status(500).json({ error: "Internal server error." });
  }
});

app.post("/subscription", async (req, res) => {
  const data = req.body;

  try {
    const newUsersubsc = new Subscription(data);
    await newUsersubsc.save(); // Save to MongoDB
    res.status(201).json({ message: "Data saved successfully." });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Failed to save data." });
  }
});

app.get('/subscription/:userEmail', async (req, res) => {
  try {
    const userEmail = req.params.userEmail;

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

app.delete('/subscription/:userEmail', async (req, res) => {
  try {
    const userEmail = req.params.userEmail;

    const result = await Subscription.deleteOne({ userEmail });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Subscription not found' });
    }

    res.status(200).json({ message: 'Subscription deleted successfully' });
  } catch (error) {
    console.error('Error deleting subscription:', error);
    res.status(500).json({ error: 'An error occurred while deleting the subscription' });
  }
});

app.put('/subscription/decrement/:userEmail', async (req, res) => {
  try {
    const userEmail = req.params.userEmail;

    const subscription = await Subscription.findOneAndUpdate(
      { userEmail },
      { $inc: { ads_count: -1 } },
      { new: true } 
    );

    if (!subscription) {
      return res.status(404).json({ error: 'Subscription not found' });
    }

    res.status(200).json({ message: 'ads_count decremented successfully', subscription });
  } catch (error) {
    console.error('Error decrementing ads_count:', error);
    res.status(500).json({ error: 'An error occurred while decrementing ads_count' });
  }
});




app.post('/clear-data2-content', (req, res) => {
  const { filePath } = req.body;
  const fullFilePath = path.join(__dirname, filePath);

  fs.readFile(fullFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).json({ error: 'Failed to read file' });
      return;
    }

    try {
      const startIndex = data.indexOf('[');
      const endIndex = data.lastIndexOf(']');

      const usersArrayContent = data.substring(startIndex, endIndex + 1);

      const modifiedContent = data.replace(usersArrayContent, '[]');

      fs.writeFile(fullFilePath, modifiedContent, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          res.status(500).json({ error: 'Failed to clear content inside file' });
        } else {
          console.log('Content inside data2.js cleared successfully!');
          res.status(200).json({ message: 'Content inside file cleared successfully' });
        }
      });
    } catch (error) {
      console.error('Error processing file data:', error);
      res.status(500).json({ error: 'Failed to process file data' });
    }
  });
});



app.listen(3000, () => {
  console.log("Express server running on port 3000.");
});
