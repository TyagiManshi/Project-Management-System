import mongoose, { Schema } from "mongoose";
import { UserRolesEnum, AvailableUserRoles } from "../utils/constants.js";

const projectMemberSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    role: {
        type: String,
        enum: AvailableUserRoles,   // enum requires an array
        default: UserRolesEnum.MEMBER,   // or "member" but we don't need hardcoded value, also remember default requires string

    },
}, {timestamps: true})

export const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema)
