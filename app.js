const express = require("express");
const fs = require("fs");
const ytdl = require("ytdl-core");

const videoUrl = "https://youtu.be/oO8w6XcXJUs?si=X_H1HAWlHZga9Cdn";
const fileName = "file1";

// Download the YouTube video and save it to a file
const videoStream = ytdl(videoUrl);
const fileStream = fs.createWriteStream(`videos/${fileName}.mp4`);

// Pipe the video stream to the file stream
videoStream.pipe(fileStream);

// Listen for the 'finish' event of the file stream
fileStream.on('finish', () => {
  console.log('Video download completed.');
});

// Handle errors
videoStream.on('error', (error) => {
  console.error('Error downloading video:', error);
  process.exit(1); // Exit with error code
});