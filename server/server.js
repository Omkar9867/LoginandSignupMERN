const express = require('express');
const cors = require('cors');
const User = require('./mongo')

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.post('/', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email:email});
        if(!user){
            res.status(500).json({message:"User does not exist"})
        }else{
            res.status(201).send(user);
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
});

app.post('/signup', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.findOne({email:email});
        if(user){
           return res.status(400).json({message:"User already exist"})
        }

    const newUser = await User.create({
        email:email,
        password:password
    });
    await newUser.save()
    res.send(newUser);
    

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error})
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Connect successful at ${PORT}`)
} );
