import User from "../models/User.js"
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

export const registerUser= asyncHandler(async(req, res)=>{
    const {name ,email, password}=req.body


    const exists= await User.findOne({email});

    if(exists){
        res.status(400);
        throw new Error("User exists already");
    }

    const user= await User.create({name, email, password})

    res.status(201).json({
        id: user.id,
        name: user.name,
        email:user.email,
        role:user.role,
        token:generateToken(user.id, user.role)

    })
})


export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    token: generateToken(user._id, user.role)
  });
});

