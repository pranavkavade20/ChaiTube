import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Video model schema defines metadata and storage references for uploaded videos.
const videoSchema = new Schema(
    {
        videoFile: {
            type: String,   //cloudinary url
            required: true
        },
        thumbnail: {        //cloudinary url
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        // Use a boolean to indicate whether this video is visible/public.
        isPublished: {
            type: Boolean,
            default: true
        },
        // Reference to the user who uploaded / owns the video.
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

// Add aggregate pagination support to this model for list queries.
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)