import mongoose, { Schema, Document, mongo } from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date;
};

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true,
    }, 
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

export interface User extends Document {
    userName: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
};

const UserSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        unique: true,
        required: [true, "Username is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        , "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "verifyCode is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "verifyCodeExpiry is required"],
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema],
});


// NOTE(Backend): It say if the Database already contains the model then provide it else create a new.
const UserModel = (mongoose.models.user as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema));

export default UserModel;
