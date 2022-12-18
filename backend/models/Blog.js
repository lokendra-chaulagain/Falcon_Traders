import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    featured: {
      type: String,
    },

    bestPick: {
      type: String,
    },

    url: {
      type: String,
      required: true,
    },

    timeRead: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
