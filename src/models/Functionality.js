import mongoose from "mongoose";

const functionalitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: false,
        },
        route: {
            type: String,
            unique: true,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        description: {
            type: String,
            required: false,
        },
        state: {
          type: Number,
          unique: false,
          default: 1
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export default mongoose.model("Functionality", functionalitySchema);
