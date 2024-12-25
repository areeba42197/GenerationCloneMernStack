import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';


//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

app.use(cors({
  origin: ["https://www.GenerationCloneMernStack.vercel.app"],  // Ensure it's a valid URL
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}));

mongoose.connect('mongodb+srv://areebasyed822:gulerana3711@cluster0.jkg8i.mongodb.net/ecommerce?retryWrites=true&w=majority');

//middelwares
app.use ( cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product",productRoutes);


//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on port ${PORT}`
  );
});
