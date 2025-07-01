// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 3,
//         maxlength: 50
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         validate: {
//             validator: (value) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
//             message: "Invalid email format"
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 6,
//         // select: false
//     },
//     verifyOtp:{
//         type:String,
//         default:''
//     },
//     verifyOtpExpireAt:{
//         type:Number,
//         default:0
//     },
//     isAccountVerified:{
//         type:Boolean,
//         default:false
//     },
//     resetOtp:{
//         type:String,
//         default:''
//     },
//     resetOtpExpireAt:{
//         type:Number,
//         default:0
//     },
// });

// const userModel =mongoose.model.user || mongoose.model('user',userSchema);


// export default userModel;

// models/User.js
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
    validate: {
      validator: (value) =>
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    required: true,
    enum: ["employee", "customer","admin"]
  },
  employeeID: {
    type: Number,
  },
  companyName: {
    type: String,
  },
  isBlocked: {
  type: Boolean,
  default: false
},
  verifyOtp: {
    type: String,
    default: ''
  },
  verifyOtpExpireAt: {
    type: Number,
    default: 0
  },
  isAccountVerified: {
    type: Boolean,
    default: false
  },
  resetOtp: {
    type: String,
    default: ''
  },
  resetOtpExpireAt: {
    type: Number,
    default: 0
  },
}, { timestamps: true });

// 📌 Composite unique index
userSchema.index({ email: 1, role: 1 }, { unique: true });

const userModel = mongoose.model("User", userSchema);
export default userModel;
