import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatuses, TaskStatusEnum } from "../utils/constants.js";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true
//   required: [true, "project ref is required"],   can do this too
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    assignedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: AvailableTaskStatuses,
      default: TaskStatusEnum.TODO,
    },
    attachments: {
      // we don't add files here in db directly bcz it increases the size hence cost
      // we add url of file service used here (cloudinary, imagekit, azure etc)
      // we need multiple attachments [{}, {}, {}]
      type: [
        {
            url: String,
            mimetype: String,     // mimetype means png, jpeg or what 
            size: Number
        }
      ],
      default: []  // empty array
    },
  },
  { timestamps: true },
);

export const Task = mongoose.model("Task", taskSchema);
