import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import salutationsRouter from "./src/routes/salutations.route.js";

const app = express();
const port = 3000;

// Middleware pour parser JSON
app.use(express.json());

// Middleware pour logger les accès dans un fichier access.log
const accessLogStream = fs.createWriteStream(path.join(".", "access.log"), { flags: "a" });
app.use(morgan(':date[clf] => :method :url :status - :response-time ms', { stream: accessLogStream }));

// Route de bienvenue
app.get("/api", (req, res) => {
    res.json({ message: "Bienvenue sur l'API de salutations !" });
});

// Utilisation des routes de salutations
app.use("/api/salutations", salutationsRouter);

// Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
