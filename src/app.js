import express from "express"
import cors from "cors"
import userRoute from "./routes/user.route.js"
import ageDistributionRoute from "./routes/age_distribution.route.js"
import processCsvRoute from "./routes/process_csv.route.js"
import createTableRoute from "./routes/create_table.route.js"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.use(express.json())

app.use('/api/v1/create-table', createTableRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/age-distribution", ageDistributionRoute);
app.use('/api/v1/process-csv', processCsvRoute);

export default app