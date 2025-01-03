import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
// console.log(process.env.MONGO_URI);

const __dirname = path.resolve();

// req = request, res = respond
// app.get("/", (req, res) => {
// 	res.send("server is ready");
// })

// middleware that allows us to accept JSON data in the req.body
app.use(express.json()); 

app.use("/api/products", productRoutes);

// join backend and frontend
if(process.env.NODE_ENV === "production"){
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) =>{
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	})
} 

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
}) 


/*

*/