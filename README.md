# Project TypeORM + Typescript

## Description

Ce projet est une application Node.js développée avec TypeORM. Il illustre un système de gestion pour une bibliothèque, permettant de gérer des clients, des livres et des emprunts.

## Fonctionnalités

-   Gestion des clients : Enregistrement et affichage des informations clients.
-   Gestion des livres : Enregistrement et suivi des livres dans la bibliothèque.
-   Gestion des emprunts : Suivi des emprunts de livres par les clients.

## Configuration Requise

-   Node.js
-   npm (Node Package Manager)
-   MySQL ou une autre base de données prise en charge par TypeORM

## Installation

Pour mettre en place et exécuter ce projet, suivez ces étapes :

1. **Clonage du projet**
    - Clonez ce dépôt sur votre machine locale en utilisant la commande :
        ```bash
        git clone
        ```
2. **Installation des Dépendances**
    - Naviguez vers le dossier du projet et exécutez la commande suivante pour installer les dépendances nécessaires :
        ```bash
        npm i
        ```
3. **Configuration de la Base de Données**

    - Configurez vos paramètres de base de données dans le fichier `data-source.ts`. Assurez-vous d'indiquer le bon type de base de données, l'hôte, le port, les identifiants utilisateur, le mot de passe et le nom de la base de données.

4. **Lancement de l'Application**
    - Exécutez le projet avec la commande :
        ```bash
        npm start
        ```

## Utilisation

Après avoir lancé l'application, elle se connectera à la base de données configurée et effectuera des opérations telles que l'insertion et la récupération de données en fonction des entités définies.
