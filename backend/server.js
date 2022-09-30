import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = 5000;

app.listen(PORT, (err) => {
	if (err) console.log(err);
	console.log("Application Started On Port: " + PORT);
});
