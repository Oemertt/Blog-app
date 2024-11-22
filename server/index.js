import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.js";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Swagger-Dokumentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routen
/**
 * @swagger
 * /:
 *   get:
 *     summary: Liste aller Blogs
 *     description: Gibt alle Blogbeiträge zurück.
 *     responses:
 *       200:
 *         description: Erfolgreich.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 */
app.get("/", async (req, res) => {
  const allBlogs = await prisma.blog.findMany();
  res.json(allBlogs);
});

/**
 * @swagger
 * /postBlog:
 *   post:
 *     summary: Erstelle einen neuen Blog
 *     description: Fügt einen neuen Blogeintrag zur Datenbank hinzu.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blog erfolgreich erstellt.
 *       400:
 *         description: Fehlerhafte Anfrage.
 */
app.post("/postBlog", async (req, res) => {
  const newBlog = await prisma.blog.create({ data: req.body });
  res.status(201).json(newBlog);
});

app.listen(5001, () => {
  console.log("Server läuft auf Port 5001");
  console.log("Swagger UI verfügbar unter http://localhost:5001/api-docs");
});
