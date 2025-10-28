import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { handleDemo } from "./routes/demo";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static files from public directory
  app.use(express.static(path.join(process.cwd(), "public")));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Serve HTML files for specific routes
  app.get("/", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "index.html"));
  });

  app.get("/about", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "about.html"));
  });

  app.get("/about.html", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "about.html"));
  });

  app.get("/course-tree", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "course-tree.html"));
  });

  app.get("/course-tree.html", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "course-tree.html"));
  });

  app.get("/additional", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "additional.html"));
  });

  app.get("/additional.html", (_req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "additional.html"));
  });

  // 404 handler - must be last
  app.use((_req, res) => {
    res.status(404).sendFile(path.join(process.cwd(), "public", "not-found.html"));
  });

  return app;
}
