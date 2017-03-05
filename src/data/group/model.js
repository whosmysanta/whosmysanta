import mongoose from 'mongoose';

const Group = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'Friend'}],
});

const GroupModel = mongoose.model('Groups', Group);

export default GroupModel;
