angular200-certification
========================

# Consignes

Vous devez crÃ©er une application d'administration d'utilisateurs.  

#### L'application devra permettre de :

*   Visualiser une liste d'utilisateurs
*   Faire une recherche par nom d'utilisateur
*   Visualiser un utilisateur
*   Modifier un utilisateur
*   Supprimer un utilisateur
*   CrÃ©er un utilisateur

#### Pour cela vous devez respecter les contraintes suivantes:

*   Les diffÃ©rentes vues pourront Ãªtre accessible directement par l'URL
*   Vous devrez mettre en place un systÃ¨me de route
*   Vous devrez crÃ©er et utiliser au moins un service
*   Vous devrez crÃ©er et utiliser au moins une directive
*   Vous devrez crÃ©er et utiliser au moins un filtre

#### Vous disposez de l'api **REST** suivante:

*   GET: **/api/users** Pour rÃ©cupÃ©rer la liste des utilisateurs
*   GET: **/api/users/:id** Pour rÃ©cupÃ©rer un utilisateur par son id
*   POST: **/api/users** Pour ajouter un utilisateur
*   PUT: **/api/users/:id** Pour modifier un utilisateur
*   DELETE: **/api/users/:id** Pour supprimer un utilisateur

# Installation et dÃ©marrage

Installer les dÃ©pendances
```sh
npm install -g grunt-cli # Admin privileges required
npm install
npm install -g bower # Admin privileges required
bower install
```

Lancer le server
```sh
grunt serve
```

Ouvrir [http://localhost:9000](http://localhost:9000)

# User
Nizar AOUISSAOUI
