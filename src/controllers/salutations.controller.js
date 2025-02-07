import { getSalutations, ajouterSalutation } from "../models/salutations.model.js";

// Obtenir toutes les salutations
const getAllSalutations =async (req, res) =>  {
    const sal = await getSalutations()
    res.json(sal);
    console.log(sal);
};

// Obtenir une salutation aléatoire, avec un filtre sur la langue si précisé
const getRandomSalutation = async(req, res) => {
    const sal = await getSalutations();
    const randomSalutation = sal[Math.floor(Math.random() * sal.length)];
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
