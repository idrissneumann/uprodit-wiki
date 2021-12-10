# Challenge uprodit

## Table des matières

[[_TOC_]]

## Travail à faire

Reproduire le moteur de recherche de uprodit.com: https://www.uprodit.com/profile/all/search/perso

<div align="center">
![qr_search_engine](./img/qr_search_engine.png)
</div>

![uprodit_search_engine](./img/uprodit_search_engine.png)

Pour cela vous pouvez utiliser l'une de ces deux APIs au choix:

* [api.uprodit.com](https://api.uprodit.com) : api authentifiée avec la méthode `/v1/search/all` (les profils saisis dans plusieurs langues sont déjà regroupés en fonction de la langue de recherche)

<div align="center">
![qr_api](./img/qr_api.png)
</div>

Vous trouverez plus de détails sur comment consommer cette API dans [cette documentation](./uprodit_api.md)

* [search.uprodit.com](https://search.uprodit.com) : api publique de recherche avec la méthode `/v1/personalProfile/all` (les informations des profils saisis dans plusieurs langues ne sont pas aggrégés en un seul résultat contrairement à la méthode précédente)

<div align="center">
![qr_api_search](./img/qr_api_search.png)
</div>
