import express from 'express'
import mongoose, { mongo } from 'mongoose'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://taiarman:Taiarman09@cluster0.vg8hcw4.mongodb.net/mydatabase")
    .then(() => console.log("Mongo DB is Connect"))
    .catch(() => console.log("Mongo DB is Not Connect"))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = mongoose.model("User", userSchema)

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body


        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Fill details"
            })
        }

        const exitUser = await User.findOne({ email })

        if (exitUser) {
            return res.status(400).json({ message: "You have already registered" })
        } else {

            const newUser = new User({ name, email, password })
            await newUser.save()

            res.json({ message: "Sign up Successfull!" })

        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "Error Saving"
        })
    }
})


app.post('/login', async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: "Fill details"
            })
        }

        const exitUser =await User.findOne({ email })

        if (!exitUser) {
            return res.status(400).json({
                message: "Invalid email"
            })
        }

        if (exitUser.password !== password) {
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        return res.json({
            message: "Login Successful",
            user: exitUser
        })

        


    } catch (err) {
        console.log(err)
        return res.status(500).json({
        message: "Server Error"
    })

    }
})


app.post("/googleSignup", async (req, res) => {
    try {
        const { name, email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ name, email });
            await user.save();
        }

        res.json({ message: "Google login successful", user });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(8080, () => {
    console.log("server is running PORT")
})






const menSchema = new mongoose.Schema({
    title: String,
    price: String
})


const men = mongoose.model("men", menSchema)

app.use('/men', async (req, res)=>{
    const {title, price} = req.body

    const newMen = new men({title, price})
    await newMen.save()

})