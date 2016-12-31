angular200-certification
========================

# Consignes

Vous devez créer une application d'administration d'utilisateurs.  

#### L'application devra permettre de :

*   Visualiser une liste d'utilisateurs
*   Faire une recherche par nom d'utilisateur
*   Visualiser un utilisateur
*   Modifier un utilisateur
*   Supprimer un utilisateur
*   Créer un utilisateur

#### Pour cela vous devez respecter les contraintes suivantes:

*   Les différentes vues pourront être accessible directement par l'URL
*   Vous devrez mettre en place un système de route
*   Vous devrez créer et utiliser au moins un service
*   Vous devrez créer et utiliser au moins une directive
*   Vous devrez créer et utiliser au moins un filtre

#### Vous disposez de l'api **REST** suivante:

*   GET: **/api/users** Pour récupérer la liste des utilisateurs
*   GET: **/api/users/:id** Pour récupérer un utilisateur par son id
*   POST: **/api/users** Pour ajouter un utilisateur
*   PUT: **/api/users/:id** Pour modifier un utilisateur
*   DELETE: **/api/users/:id** Pour supprimer un utilisateur

# Installation et démarrage

Installer les dpendances

npm install -g grunt-cli # Admin privileges required
npm install
npm install -g bower # Admin privileges required
bower install


Lancer le server

grunt serve


Ouvrir [http://localhost:9000](http://localhost:9000)

# User
Nizar AOUISSAOUI
