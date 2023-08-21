const mongoose = require("mongoose");
const event_model = require("./event_collection"); // Adjust the path to match your event_model.js file

mongoose.connect("mongodb://localhost:27017/Bytez", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const ObjectId = mongoose.Types.ObjectId;

const dummyEvents = [
  {
    title: "Concert in the Park",
    description: "Enjoy live music in a beautiful park setting.",
    date: new Date("2023-09-01"),
    time: "18:00",
    location: "Central Park",
    category: "Music",
    images: ["https://example.com/concert1.jpg"],
    videos: [],
    organizer: "64df41b579fc3b39edec0e2b",
    venueInformation: "Open-air amphitheater",
    rulesAndRestrictions: "No outside food or drinks",
    highlights: "Top local bands performing",
    artistDetails: "Featuring popular artists",
    reviews: [],
    relatedEvents: [],
    ticketAvailability: "Limited seats available",
    sponsorsAndPartners: "Presented by MusicCo",
    hashtags: ["concert", "music", "park"],
    bookingStatus: "open",
  },
];

(async () => {
  try {
    const insertedEvents = await event_model.insertMany(dummyEvents);
    console.log("Dummy data inserted successfully:", insertedEvents);
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  } finally {
    mongoose.connection.close();
  }
})();
