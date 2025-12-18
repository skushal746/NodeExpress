import express from "express";

const app = express();

app.use(express.json());

import userRoute from "./routes/user.route.js";

app.use("/kushapi/v1/users", userRoute); // http://localhost:3400/kushapi/v1/users/register 

export default app;
