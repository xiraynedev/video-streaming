import type { NextApiRequest, NextApiResponse } from "next";

const http = require("http");
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Video } = require("../../models/Video");
const dbHost = process.env.dbHost;
const videoStorageHost = process.env.videoStorageHost;
const videoStoragePort = process.env.videoStoragePort;

function connectDB() {
  mongoose.connect(dbHost);
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectDB();

  async function run() {
    const videoId = new ObjectId(req.query.id);
    const video = await Video.findById(videoId);

    const forwardRequest = http.request(
      {
        host: videoStorageHost,
        port: videoStoragePort,
        path: `/api/video?path=${video.videoPath}`,
        method: "GET",
        headers: req.headers,
      },
      (forwardResponse: any) => {
        res.writeHead(forwardResponse.statusCode, forwardResponse.headers);
        forwardResponse.pipe(res);
      }
    );

    req.pipe(forwardRequest);
  }
  run();
}
