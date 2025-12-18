import express from "express";

const app = express();

app.use(express.json());

import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

app.use("/kushapi/v1/users", userRoute); // http://localhost:3400/kushapi/v1/users
app.use("/kushapi/v1/posts", postRoute); // http://localhost:3400/kushapi/v1/posts

export default app;
