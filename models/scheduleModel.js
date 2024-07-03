const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
    {
        cpf: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule