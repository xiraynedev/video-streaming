import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../utils/functions";

const http = require("http");
const { ObjectId } = require("mongodb");
const { Video } = require("../../models/Video");

const videoStorageHost = process.env.videoStorageHost;
const videoStoragePort = process.env.videoStoragePort;

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
