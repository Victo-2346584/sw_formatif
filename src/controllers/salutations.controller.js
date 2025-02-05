import { salutations, ajouterSalutation } from "./salutations.model.js";

// Obtenir toutes les salutations
const getAllSalutations = (req, res) => {
    res.json(salutations);
};

// Obtenir une salutation aléatoire, avec un filtre sur la langue si précisé
const getRandomSalutation = (req, res) => {
    const { langue } = req.query;
    let filteredSalutations = salutations;

    if (langue) {
        filteredSalutations = salutations.filter(s => s.code_langue === langue);
        if (filteredSalutations.length === 0) {
            return res.status(404).json({ message: `Erreur, le code de langue ${langue} n'existe pas` });
        }
    }

    const randomSalutation = filteredSalutations[Math.floor(Math.random() * filteredSalutations.length)];
    res.json(randomSalutation);
};

// Ajouter une salutation
const addSalutation = (req, res) => {
    const { code_langue, langue, message } = req.body;

    if (!code_langue || !langue || !message) {
        return res.status(400).json({ message: "Erreur, les paramètres code_langue, langue et message sont obligatoires" });
    }

    ajouterSalutation(code_langue, langue, message);
    res.status(201).json({ message: "Salutation ajoutée", salutation: message });
};

export { getAllSalutations, getRandomSalutation, addSalutation };
