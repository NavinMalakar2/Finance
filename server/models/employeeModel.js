import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
            message: "Invalid email format"
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        // select: false
    },
    employeeID:{
        type:Number,
        required:true,
        minlength:5,
    },
    verifyOtp:{
        type:String,
        default:''
    },
    verifyOtpExpireAt:{
        type:Number,
        default:0
    },
    isAccountVerified:{
        type:Boolean,
        default:false
    },
    resetOtp:{
        type:String,
        default:''
    },
    resetOtpExpireAt:{
        type:Number,
        default:0
    },
});

const employeeModel =mongoose.model.user || mongoose.model('user',userSchema);


export default employeeModel;