const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

    {
        name: {
            type: String,
            required: true,
        },
        cpf: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
        },
        tel: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User