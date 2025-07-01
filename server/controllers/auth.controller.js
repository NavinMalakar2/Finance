import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'
import transporter from '../config/nodemailer.js';



// export const register = async (req, res) => {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password) {
//         return res.status(400).json({ msg: "All fields are required" });
//     }

//     try {
//         const existingUser = await userModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ msg: "User already exists, please login" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new userModel({ name, email, password: hashedPassword });
//         await user.save();

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
//             maxAge: 7 * 24 * 60 * 60 * 1000,
//         });

//         // Sending welcome email
//         const mailOptions = {
//             from: process.env.SENDER_EMAIL,
//             to: email,
//             subject: "Welcome to our website",
//             text: `Welcome to the website, ${name}! Your account has been created successfully. Enjoy your stay.`,
//         };

//         // Debugging email options
//         console.log("Mail Options:", mailOptions);

//         await transporter.sendMail(mailOptions);

//         return res.status(201).json({ success: true, message: "User registered successfully" });
//     } catch (error) {
//         console.error("Error during registration:", error.message);
//         return res.status(500).json({ success: false, msg: error.message });
//     }
// };


// LOGIN FUNCTION

export const register = async (req, res) => {
  const { name, email, password, role, employeeID, companyName } = req.body;

  // ✅ Step 1: Basic validation (for ALL roles)
  if (!name || !email || !password || !role) {
    return res.status(400).json({ msg: "Name, email, password and role are required" });
  }

  // ✅ Step 2: Role-specific validation
  if (role === "employee" && !employeeID) {
    return res.status(400).json({ msg: "Employee ID is required for employee registration" });
  }

  if (role === "businessman" && !companyName) {
    return res.status(400).json({ msg: "Company Name is required for businessman registration" });
  }

  // ✅ No extra validation needed for customer

  try {
    // ✅ Step 3: Check uniqueness based on email + role
    const existingUser = await userModel.findOne({ email, role });
    if (existingUser) {
      return res.status(400).json({ msg: `User already exists as ${role}, please login` });
    }

    // ✅ Step 4: Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Step 5: Create new user with optional role-based fields
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      role,
      ...(employeeID && { employeeID }), // only added for employee
      ...(companyName && { companyName }) // only added for businessman
    });

    await user.save();

    // ✅ Step 6: JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // ✅ Step 7: Set token cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // ✅ Step 8: Welcome email
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome to our website",
      text: `Welcome to the website, ${name}! Your account as ${role} has been created successfully. Enjoy your stay.`,
    };

    console.log("Mail Options:", mailOptions);
    await transporter.sendMail(mailOptions);

    return res.status(201).json({ success: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error.message);
    return res.status(500).json({ success: false, msg: error.message });
  }
};


// export const login = async (req,res)=>{
//     const {email,password}=req.body;
//     if(!email || !password){
//         return res.status(400).json({msg: "All fields are required"});
//     }
//     try {
//         const user =await userModel.findOne({email})
//         if(!user){
//             return res.status(400).json({msg: "User not found"});
//         }
//         const isMatch = await bcrypt.compare(password,user.password);
//         if(!isMatch){
//             return res.status(400).json({msg: "Incorrect Password"});
//         }
//         const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
//         res.cookie('token',token,{
//             httpOnly:true,
//             secure:process.env.NODE_ENV === 'production',
//             sameSite:process.env.NODE_ENV === 'production'?
//             'none':'strict',
//             maxAge:7 * 24 * 60 * 60 *1000
//         });
//         return res.status(201).json({success:true, message:'login successful'});
//     } catch (error) {
//         return res.status(400).json({msg: error.message});
//     }
// }


// LOGOUT FUNCTION

// export const login = async (req, res) => {
//   const { email, password, role } = req.body;

//   // ✅ Step 1: Validate all required fields
//   if (!email || !password || !role) {
//     return res.status(400).json({ msg: "Email, password and role are required" });
//   }

//   try {
//     // ✅ Step 2: Find user by email + role
//     const user = await userModel.findOne({ email, role });
//     if (!user) {
//       return res.status(404).json({ msg: `No ${role} account found with this email` });
//     }

//     // ✅ Step 3: Check password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ msg: "Incorrect password" });
//     }

//     // ✅ Step 4: Generate JWT token
//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     // ✅ Step 5: Set cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
//       maxAge: 7 * 24 * 60 * 60 * 1000,
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Login successful",
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     console.error("Login error:", error.message);
//     return res.status(500).json({ msg: "Something went wrong", error: error.message });
//   }
// };
export const login = async (req, res) => {
  const { email, password, role } = req.body;

  console.log("Login attempt:", { email, password, role }); // 👈 log this

  if (!email || !password || !role) {
    return res.status(400).json({ msg: "Email, password and role are required" });
  }

  try {
    const user = await userModel.findOne({ email,role});
    console.log("hii")
    console.log("Found user:", user); // 👈 log this
    console.log(user)

    if (!user) {
      console.log("not match")
      return res.status(404).json({ msg: `No ${role} account found with this email` });
      
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Incorrect password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).json({ msg: "Something went wrong", error: error.message });
  }
};



export const logout = async (req, res) => {
   try {
        res.clearCookie('token',{
            httpOnly:true,
            secure:process.env.NODE_ENV === 'production',
            sameSite:process.env.NODE_ENV === 'production'?
            'none':'strict',
          
        })
        return res.status(200).json({success: true, message: 'Logged out successfully'});
   } catch (error) {
    return res.status(400).json({msg: error.message});
   }
}


// SEND OTP FOR VERIFICATION
export const sendVerifyOtp = async (req, res) => {
    try {
        const {userId} =req.body;
        const user = await userModel.findById(userId);
        if(user.isAccountVerified) {
            return res.status(400).json({msg: 'Account already verified'});
        }
     const otp= String( Math.floor(100000 + Math.random() * 9000000) );
     user.verifyOtp = otp;
     user.verifyOtpExpireAt=Date.now()+24*60*60*1000;
     await user.save();
     const mailOption = {
         from: process.env.SENDER_EMAIL,
         to: user.email,
         subject: 'Account Verification OTP',
         text: `Your verification code is: ${otp}`
     }
     await transporter.sendMail(mailOption);
     return res.status(200).json({msg: 'Verification OTP sent successfully'});
    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
};


// VERIFI EMAIL BY OTP
export const verifiEmail= async (req, res) => {
    const {userId,otp}=req.body;
    if(!userId || !otp){
        return res.status(400).json({msg: 'All fields are required'});
    }
    try {
        const user =await userModel.findById(userId)
        if(!user){
            return res.status(400).json({msg: 'User not found'});
        }
        if(user.verifyOtp === ''||user.verifyOtp !== otp){
            return res.status(400).json({msg: 'Invalid OTP'});
        }
        if(user.verifyOtpExpireAt<Date.now()){
            return res.status(400).json({msg: 'OTP expired'});
        }
        user.isAccountVerified = true;
        user.verifyOtp='';
        user.verifyOtpExpireAt=0;
        await user.save();
        return res.status(200).json({msg: 'Email verified successfully'});

;    } catch (error) {
        return res.status(400).json({msg: error.message});
    }
}


// CHAK AUTHENTICATED OR NOT
export const isAuthenticated = async (req, res) =>{
    try {
       return res.json({success: true}); 
    } catch (error) {
        return  res.status(400).json({msg: error.message});
    }
}

// SEND PASSWORD RESET OTP

export const sendResetOtp = async (req, res) => {
    const{email}= req.body;
    if(!email){
        return res.status(400).json({msg: 'Email  is required'});
    }
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({msg: 'User not found'});
        }

    const otp= String( Math.floor(100000 + Math.random() * 9000000) );

     user.resetOtp = otp;

     user.resetOtpExpireAt=Date.now()+15*60*60*1000;

     await user.save();
     const mailOption = {
         from: process.env.SENDER_EMAIL,
         to: user.email,
         subject: 'password redet otp',
         text: `Your otp for password reset is: ${otp}`
     }
     await transporter.sendMail(mailOption);
     return res.status(200).json({msg: 'Password reset OTP sent successfully'});
    
    } catch (error) {
        return res.status(400).json({msg:error.message});
    }
}

// Reset User Password 
export const resetPassword =async (req, res) => {
    const {email,otp,newPassword} = req.body;
    if(!email || !otp || !newPassword){
        return res.status(400).json({msg: 'All fields are required'});
    }
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({msg: 'User not found'});
        }
        if(user.resetOtp === "" || user.resetOtp !==otp){
            return res.status(400).json({msg: 'Invalid OTP'});
        }
        if(user.resetOtpExpireAt<Date.now()){
            return res.status(400).json({msg: 'OTP expired'});
        }
        const hashedPassword = await bcrypt.hash(newPassword,10)
        user.password = hashedPassword;
        user.resetOtp='';
        user.resetOtpExpireAt=0;
        await user.save();
        return res.status(200).json({msg: 'Password reset successfully'});
    } catch (error) {
        return res.status(400).json({msg:error.message});
    }
}