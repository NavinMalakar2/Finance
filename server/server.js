import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import {authRouter} from './routes/authRouter.js'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import adminRouter from './routes/adminRouter.js';






dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000 
connectDB();
app.use(express.json());



// APIEndpoint
app.get('/', (req, res) => {
    res.json({message: 'Welcome to the API!'});
});


app.use(
  cors({
    origin: "http://localhost:5173", // exact origin of your frontend
    credentials: true,               // allow cookies/auth headers
  })
);

app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)
app.use("/api/admin",adminRouter );


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});