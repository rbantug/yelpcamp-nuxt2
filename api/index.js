const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')

const allRoutes = require('./allRoutes')
const errorController = require('./controllers/errorController')

process.on("uncaughtException", (err) => {
	console.log("Unhandled Exception. Shutting Down...");
	console.log(err.name, err.message);
	process.exit(1);
});

app.use(express.urlencoded({extended: true}));
app.use(express.json({ limit: '10kb' }))
//app.use(express.json())

app.use(mongoSanitize()) // Prevent noSQL query injection
app.use(xss()) // Prevent Cross site scripting attacks

app.use('/v1', allRoutes)
app.use(errorController)

const DB = process.env.DATABASE_URL.replace(
	"<password>",
	process.env.DATABASE_PASSWORD
);

mongoose.connect(DB)
    .then(() => {
    console.log("DB is working");
});

process.on("unhandledRejection", (err) => {
	console.log(err.name, err.message);
	console.log("💥 Unhandled Rejection. Shutting Down...");
	process.exit(1);	
	/* server.close(() => {
	}); */
});

module.exports = app