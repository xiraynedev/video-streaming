import mongoose from "mongoose";

const videoStreamingDbHost = process.env.videoStreamingDbHost;

export function connectDB() {
  mongoose.connect(videoStreamingDbHost as string);
  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Database connected successfully.");
  });

  connection.on("disconnected", () => {
    console.log("Database disconnected successfully.");
  });

  connection.on("error", () => {
    console.error("Connection error has occurred.");
  });
}