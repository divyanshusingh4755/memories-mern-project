import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import PostRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", PostRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello to memories API")
})

const PORT = process.env.PORT

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error.message)
    })

mongoose.set('useFindAndModify', false);