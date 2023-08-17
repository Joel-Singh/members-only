import mongoose, { Schema } from "mongoose";

export interface MessageProperties {
  timestamp: Date;
  author: mongoose.Types.ObjectId;
  title: string;
  body: string;
}

const MessageSchema = new Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model<MessageProperties>("Message", MessageSchema);
export default Message;
