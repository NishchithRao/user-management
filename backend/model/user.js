const mongoose = require('mongoose');
const crypto = require('crypto');
const {v1:uuidv1} = require('uuid');
const {ObjectId} = mongoose.Schema;

const AddressSchema = new mongoose.Schema({
    line1:{
        type: String,
        trim:true,
        lowercase: true
    },
    city: {
        type:String,
        required: true,
        lowercase: true,
        trim:true,
    },
    state: {
        type:String,
        required: true,
        lowercase: true,
        trim:true,
    },
    pincode: {
        type: String,
        required: true,
    }
})

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim:true,
        lowercase: true
    },
    lastName: {
        type: String,
        required: true,
        trim:true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim:true
    },
    dob: {
        dd: {
            type: Number,
            required: true
        },
        mm: {
            type: String,
            required: true
        },
        yy: {
            type: Number,
            required: true
        }
    },
    salt: String,
    hashed_password: {
        type: String,
        required: true
    },
    profilePicture: String,
    address: AddressSchema,
    role: {
        type: Number,
        default: 0
    },
    manager: {
        type: ObjectId,
        ref: "User"
    },
    gender: String,
},{timestamps:true});

userSchema.virtual('password')
.set(function(plainPassword) {
    this._plainPassword = plainPassword;
    this.salt = uuidv1();
    this.hashed_password = this.hashPassword(plainPassword)
})
.get(function() {
    console.log(this._plainPassword);
    return this._plainPassword});

userSchema.methods = {
    hashPassword: function (plainPassword) {
        if (!plainPassword) return '';
        try {
            return crypto.Hmac("SHA256",this.salt)
            .update(plainPassword)
            .digest('hex');
        }
        catch(err) {
            console.log(err);
            return '';
        }
    },
    checkPassword: function(plainPassword) {
        return this.hashed_password == this.hashPassword(plainPassword);
    }
}

module.exports = new mongoose.model("User",userSchema);