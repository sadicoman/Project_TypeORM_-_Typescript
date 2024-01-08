// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))

import { AppDataSource } from "./data-source";
import { Client } from "./entity/Client";
import { Livre } from "./entity/Livre";
import { Emprunt } from "./entity/Emprunt";

AppDataSource.initialize()
    .then(async () => {
        // Création et enregistrement d'un nouveau client
        console.log("Vérification de l'existence du client dans la base de données...");
        const clientRepository = AppDataSource.getRepository(Client);
        const numeroNational = 123456789; // Assurez-vous que ceci est une chaîne si votre numéro national est une chaîne
        const clientExistant = await clientRepository.findOneBy({ numeroNational });

        let client;
        if (!clientExistant) {
            console.log("Insertion d'un nouveau client dans la base de données...");
            client = new Client();
            client.numeroNational = numeroNational; // Assurez-vous que le type correspond à la définition dans votre entité
            client.nom = "Durand";
            client.prenom = "Alice";
            client.rue = "123, avenue des Champs-Élysées";
            client.numeroRue = "123";
            client.codePostal = "75008";
            client.commune = "Paris";
            await clientRepository.save(client);
            console.log("Nouveau client enregistré avec l'ID: " + client.numeroNational);
        } else {
            client = clientExistant;
            console.log(
                "Un client avec ce numéro national existe déjà. ID: " +
                    client.numeroNational,
            );
        }

        // Création et enregistrement d'un nouveau livre
        console.log("Insertion d'un nouveau livre dans la base de données...");
        const livre = new Livre();
        livre.isbn = "9781234567897";
        livre.titre = "La Peste";
        livre.nomAuteurs = "Albert Camus";
        livre.dateAchat = new Date("2022-01-01");
        await AppDataSource.manager.save(livre);
        console.log("Nouveau livre enregistré avec l'ISBN: " + livre.isbn);

        // Création et enregistrement d'un nouvel emprunt
        console.log("Enregistrement d'un nouvel emprunt dans la base de données...");
        const emprunt = new Emprunt();
        emprunt.dateEmprunt = new Date();
        emprunt.dateRetour = null; // Pas encore retourné
        emprunt.client = client;
        emprunt.livre = livre;
        await AppDataSource.manager.save(emprunt);
        console.log("Nouvel emprunt enregistré avec l'ID: " + emprunt.id);

        // Chargement des emprunts depuis la base de données
        console.log("Chargement des emprunts depuis la base de données...");
        const emprunts = await AppDataSource.manager.find(Emprunt);
        console.log("Emprunts chargés: ", emprunts);

        // Récupération et affichage des informations de tous les clients
        console.log("Chargement des clients depuis la base de données...");
        const clients = await AppDataSource.manager.find(Client);
        clients.forEach((client) => {
            console.log(
                `Client ID: ${client.numeroNational}, Nom: ${client.nom}, Prénom: ${client.prenom}, Adresse: ${client.rue} ${client.numeroRue}, ${client.codePostal} ${client.commune}`,
            );
            console.log("Client (Objet):", client);
        });
    })
    .catch((error) =>
        console.log("Erreur lors de l'initialisation de la source de données:", error),
    );
