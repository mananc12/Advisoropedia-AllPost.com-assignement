require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const connectDB = require("./utils/db");
const router = require("./routers/app.routers");
const errorMiddleware = require("./middlewares/error-middleware");


//rate-limiter

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(cors());
app.use(limiter);
app.use(express.json());
app.use("/api", router);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
