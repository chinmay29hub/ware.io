const http = require("http");
const cron = require("node-cron");
const mongoose = require("mongoose");
const Expiration = require("./models/expir.model");

// Connect to MongoDB
mongoose.connect("mongodb+srv://wareio:bootstrapparadox@cluster0.sqmybub.mongodb.net/test/products")
// Schedule the cron job to run every day at 12:00 AM
cron.schedule("0 0 0 * * *", async () => {
  try {
    // Find all expired items in the database
    const items = await Expiration.find({
      expiryDate: { $gte: new Date(), $lte: new Date(new Date().setDate() + 1) }
    });

    // Send a notification to the user for each expired item
    items.forEach((item) => {
      sendNotification(`${item.item.product_name} is going to expire in 10 days`);
    });
  } catch (err) {
    console.error("Error: ", err);
  }
});

const sendNotification = (message) => {
  // Send a notification for each expired item
  const options = {
    hostname: "localhost",
    port: 3000,
    path: `/notification?item=${message}`,
    method: "GET",
  };
  http.request(options, () => {
    console.log(`Notification sent for: ${item.item.product_name}`);
  });
};

// Create a server and handle incoming requests
const server = http.createServer((req, res) => {
  if (req.url === "/notification" && req.method === "GET") {
    // Extract the message from the query string
    console.log(res.url)
    const message = req.url.split("=")[1];

    sendNotification(message)

    // You should replace this with the code to send the actual notification
    console.log(`Notification sent: ${message}`);

    // Send a response to the client
    res.end("Notification sent");
  } else {
    // Send a response to the client
    res.end("Invalid request");
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
