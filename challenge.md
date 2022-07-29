# Challenge uprodit

## Travail à faire

Reproduire le moteur de recherche de uprodit.com: https://www.uprodit.com/profile/all/search/perso

<div align="center">
![qr_search_engine](./img/qr_search_engine.png)
</div>

Voici à quoi il ressemble:

![uprodit_search_engine](./img/uprodit_search_engine.png)

## Consignes

* Technologie frontend de type SPA : Angular, React ou Vue.JS ou bien une application mobile
* Pusher la solution sur un repo publique sur [github](https://github.com), [gitlab](https://gitlab.com) ou [bitbucket](https://bitbucket.org).
* Déployer l'application sur un cloud tel que [Heroku](https://www.heroku.com) ou [Netlify](https://www.netlify.com) ou autre hébergeur de votre choix (il faut une URL en https)
* Donnez des indications dans le fichier `README.md` de comment builder votre application en local avec des captures d'écran. S'il s'agit d'une application mobile, pushez aussi le fichier .apk compilé. Pour une application web, un `docker-compose.yml` sera grandement apprécié pour faciliter le démarrage sans installation des dépendances
* Envoyer les liens à l'adresse `challenge@comwork.io` (faites le maximum, n'hésitez pas à nous envoyer votre repo même si vous n'avez pas pu faire les partie docker ou hébergement)

## Endpoints à utiliser

Voici les contrats d'interface de l'API (format wadl) [api.uprodit.com](https://api.uprodit.com):

<div align="center">
![qr_api](./img/qr_api.png)
</div>

Les endpoints à utiliser sont:
* la méthode `/v1/search/all`: pour la recherche par critères
* la méthode `/v2/profile/picture/f/{id}`: pour récupérer les photos de profils en base64 pour les résultats de recherche (le paramètre `id` est à remplacer par la valeur de `image_id` des résultats précédents)

L'appid à utiliser pour s'authentifier est `challenge_uprodit`, l'environnement `production` et le usecase `perso`. Vous trouverez plus de détails sur comment consommer cette API dans [cette documentation](./uprodit_api.md) et également dans notre [formation](./formation_slides.pdf). Vous pouvez également vous aider des [collections postman](./postman).
