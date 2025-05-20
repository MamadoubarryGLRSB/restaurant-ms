# Système de Gestion de Commandes pour Restaurant

Ce projet est une application microservices pour la gestion des commandes d'un restaurant, permettant de prendre des commandes clients, de les traiter en cuisine et de suivre leur statut jusqu'à la livraison.

## Architecture Microservices

Le système comprend les services suivants :

1. **Service de Gestion des Clients** : Gère les informations des clients, les authentifications et les sessions.
2. **Service de Commandes** : Permet aux clients de passer des commandes, les enregistre et les transmet aux services appropriés.
3. **Service de Cuisine** : Reçoit les commandes, permet aux chefs de mettre à jour le statut des plats.
4. **Service de Livraison** : Gère les livreurs, les affectations et le suivi des livraisons.

## Technologies

- NestJS pour les API backend
- Prisma comme ORM
- PostgreSQL comme base de données
- Docker pour la conteneurisation

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/MamadoubarryGLR58/restaurant-ms.git

# Installer les dépendances pour chaque service
cd client-service
npm install

cd ../order-service
npm install

# Démarrer les services
docker-compose up -d
```

## Développement

Chaque service est conçu pour fonctionner indépendamment tout en communiquant avec les autres services via API REST. 