const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: [String],
  videos: [String],
  organizer: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    ref: "User",
    required: true,
  },
  venueInformation: String,
  rulesAndRestrictions: String,
  highlights: String,
  artistDetails: String,
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      rating: Number,
      comment: String,
    },
  ],
  relatedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event", 
    },
  ],
  ticketAvailability: String,
  sponsorsAndPartners: String,
  hashtags: [String],
  bookingStatus: {
    type: String,
    enum: ["open", "closed", "full"],
    default: "open",
  },
});

const event_model = mongoose.model("event_collection", eventSchema);

module.exports = event_model;
