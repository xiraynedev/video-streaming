const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  videoPath: String,
});

const Video = mongoose.model('Videos', videoSchema);

export { Video };

