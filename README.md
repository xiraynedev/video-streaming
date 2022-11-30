![Docker](https://img.shields.io/badge/Docker-20.10.17-blue)
![Docker Compose](https://img.shields.io/badge/Docker%20Compose-2.7.0-blue)
![Debian](https://img.shields.io/badge/Debian-11-red)
![WSL2](https://img.shields.io/badge/WSL2-Windows%20Subsystem%20for%20Linux-blue)
![Next.js](https://img.shields.io/badge/Next.js-13.0.0-lightgrey)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7.4-blue)

# video-streaming

Video Streaming is a Next.js and TypeScript microservices application that works with MongoDB to acquire video metadata. It then sends a direct message to the video storage microservice to retrieve the video from Azure Storage and stream it back to the client.

The application is currently a work in progress. The next steps will be to provision the infrastructure with Terraform, and then set up a Kubernetes cluster to manage the containers.

![application screenshot](application-screenshot.webp)
