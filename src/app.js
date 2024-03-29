import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// Routes
import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import roleRoutes from "./routes/role.routes.js";
import functionalityRoutes from "./routes/functionality.routes.js"
import clubRoutes from "./routes/club.routes.js"

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);

// Middlewares
app.use(
  cors({
    // origin: "http://localhost:3000",
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api", indexRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/functionalities", functionalityRoutes);
app.use("/api/clubs", clubRoutes);

export default app;
