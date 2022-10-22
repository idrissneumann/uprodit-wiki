# Challenge

## Work to do

Replicate the search engine of uprodit.com: https://www.uprodit.com/profile/all/search/perso

![qr_search_engine](./img/qr_search_engine.png)

This is what it looks like:

![uprodit_search_engine](./img/uprodit_search_engine.png)

## Instructions

* Deliver either a SPA (Single Page Application) using client-side JS framework like Angular, React, Svelte or Vue.JS or a mobile application
* Push your code in a public git repo with an opensource licence (MIT, Apache 2.0, GPL, whatever). You can use any public git provider you want like [github](https://github.com), [gitlab](https://gitlab.com) or [bitbucket](https://bitbucket.org)
* Auto-deploy your application in a PaaS like [Heroku](https://www.heroku.com) or [Netlify](https://www.netlify.com) or any hosting cloud provider (you have to provide us an available https url)
* Donnez des indications dans le fichier `README.md` de comment builder votre application en local avec des captures d'écran. S'il s'agit d'une application mobile, pushez aussi le fichier .apk compilé. Pour une application web, un `docker-compose.yml` sera grandement apprécié pour faciliter le démarrage sans installation des dépendances. 
* Faire également un `Dockerfile` en respectant les bonnes pratiques de prod sera encore davantage appréciable, pour cela vous pouvez également suivre [cette formation sur docker](https://gitlab.comwork.io/comwork_public/training/docker).
* Envoyer les liens à l'adresse `challenge@comwork.io` (faites le maximum, n'hésitez pas à nous envoyer votre repo même si vous n'avez pas pu faire les partie docker ou hébergement). Vous pouvez également nous demander une invitation pour notre [workspace Slack](https://uprodit-tech.slack.com), envoyez nous un email à `challenge@comwork.io` pour y être invité(e).

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
