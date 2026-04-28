# 🏙️ SWEVEN - Streetwear Brand Infrastructure

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

Bienvenue sur le dépôt officiel du projet **SWEVEN**, une application web de marque de streetwear industrialisée avec une architecture DevOps moderne. 

Ce projet a été réalisé dans le cadre de notre évaluation DS2 pour démontrer la mise en place d'une pipeline d'intégration et de déploiement continus (CI/CD) ainsi que la conteneurisation d'applications.

## 👥 L'Équipe (Groupe de Travail)
* **Ghassen Jdidi** - Architecture DevOps, CI/CD & Git Lead
* **Brahim** - Développement HTML & Tests Pipeline
* **Fahed** - Design CSS & Tests Pipeline
* **Abdeljalil** - JavaScript & Tests Pipeline

## 🏗️ Architecture du Projet

Notre infrastructure repose sur plusieurs piliers technologiques :

1. **Conteneurisation (Docker) :** Le site web est encapsulé dans une image `nginx:alpine`, choisie pour sa légèreté, sa rapidité de déploiement et sa sécurité accrue.
2. **Orchestration Multi-Services (Docker Compose) :** L'environnement de production local déploie simultanément le serveur web (Port 8080) et un service de logs secondaire (Port 8081).
3. **Automatisation (GitHub Actions) :** Une pipeline CI/CD complète est déclenchée à chaque modification sur les branches principales (`main` et `develop`).

## ⚙️ La Pipeline CI/CD

Notre workflow GitHub Actions (`ci.yml`) exécute automatiquement trois tâches essentielles :
- ✅ **Test HTML/CSS :** Vérification de l'intégrité du code source.
- ✅ **Build Docker :** Construction automatisée de l'image `sweven-project-web`.
- ✅ **Security Scan (Bonus) :** Analyse des vulnérabilités de l'image générée.

*Note : La branche `main` est protégée. Aucun code ne peut être fusionné si la pipeline échoue.*

## 🚀 Comment lancer le projet en local

Prérequis : Avoir [Docker Desktop](https://www.docker.com/products/docker-desktop) installé et en cours d'exécution.

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/ghazzenjd-code/sweven-project.git](https://github.com/ghazzenjd-code/sweven-project.git)
   cd sweven-project