import { error } from 'console';
import db from '../config/db.js';
import { resolve } from 'path';
import { rejects } from 'assert';

// Fonction pour récupérer les salutations depuis la base de données
const getSalutations = async () => {
    return  new Promise  ((resolve, rejects) =>{
        db.query('SELECT * FROM salutations',(error, resultat) => {
            if(error){}
            else{
                resolve(resultat);
            }
        
        })
    });
    
     
};

// Fonction pour ajouter une salutation à la base de données
const ajouterSalutation = async (code_langue, langue, message) => {
    return  new Promise  ((resolve, rejects) =>{
        db.query('INSERT INTO salutations (code_langue, langue, message) VALUES (?, ?, ?)', 
        [code_langue, langue, message],(error, resultat) => {
            if(error){}
            else{
                resolve(resultat);
            }
        
        })
    });
};

export { getSalutations, ajouterSalutation };
