# Challenge uprodit

## Travail à faire

Reproduire le moteur de recherche de uprodit.com: https://www.uprodit.com/profile/all/search/perso

![qr_search_engine](./img/qr_search_engine.png)

Voici à quoi il ressemble:

![uprodit_search_engine](./img/uprodit_search_engine.png)

## Consignes

* Technologie frontend de type SPA : Angular, React, Svelte ou Vue.JS ou bien une application mobile
* Pusher la solution sur un repo git publique. Vous pouvez utiliser le provider de votre choix comme [github](https://github.com), [gitlab](https://gitlab.com) ou [bitbucket](https://bitbucket.org).
* Déployer l'application sur un cloud tel que [Heroku](https://www.heroku.com) ou [Netlify](https://www.netlify.com) ou autre hébergeur de votre choix (il faut une URL en https)
* Donnez des indications dans le fichier `README.md` de comment builder votre application en local avec des captures d'écran. S'il s'agit d'une application mobile, pushez aussi le fichier .apk compilé. Pour une application web, un `docker-compose.yml` sera grandement apprécié pour faciliter le démarrage sans installation des dépendances. 
* Faire également un `Dockerfile` en respectant les bonnes pratiques de prod sera encore davantage appréciable, pour cela vous pouvez également suivre [cette formation sur docker](https://gitlab.comwork.io/comwork_public/training/docker).
* Envoyer les liens à l'adresse `challenge@comwork.io` (faites le maximum, n'hésitez pas à nous envoyer votre repo même si vous n'avez pas pu faire les partie docker ou hébergement)

Pas de grands efforts attendus sur le design, quelque chose dans ce style suffit amplement:

![challenge_proto](./img/challenge_proto.png)

Si vous avez envie de faire un beau design, c'est toujours appréciable ! Mais nous analysons davantage la capacité à intégrer notre API dans des applications clients.

## Endpoints à utiliser

Voici les contrats d'interface de l'API (format wadl) [api.uprodit.com](https://api.uprodit.com):

![qr_api](./img/qr_api.png)

Les endpoints à utiliser sont:
* la méthode `/v1/search/all`: pour la recherche par critères
* la méthode `/v2/profile/picture/f/{id}`: pour récupérer les photos de profils en base64 pour les résultats de recherche (le paramètre `id` est à remplacer par la valeur de `image_id` des résultats précédents)

L'appid à utiliser pour s'authentifier est `challenge_uprodit`, l'environnement `production` et le usecase `perso`. Vous trouverez plus de détails sur comment consommer cette API [ici](./api/README.md).
