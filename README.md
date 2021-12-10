# Challenge uprodit

Reproduire le moteur de recherche de uprodit.com: https://www.uprodit.com/profile/all/search/perso

![uprodit_search_engine](./img/uprodit_search_engine)

Pour cela vous pouvez utiliser l'une de ces deux APIs au choix:

* [api.uprodit.com](https://api.uprodit.com) : api authentifiée avec la méthode `/v1/search/all` (les profils saisis dans plusieurs langues sont déjà regroupés en fonction de la langue de recherche)
* [search.uprodit.com](https://api.uprodit.com) : api publique de recherche avec la méthode `/v1/personalProfile/all` (les informations des profils saisis dans plusieurs langues ne sont pas aggrégés en un seul résultat contrairement à la méthode précédente)
