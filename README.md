# Projet Web NASA :rocket:

## Introduction :ringed_planet: :stars:
L'idée du projet était de faire une application centré sur l'espace, les étoiles, etc.
Le concept est venu à la base de la passion et la fascination que nous avons pour ce domaine.

Le concept était de faire une application qui nous permettent de retrouver n'importe quelle étoile dans le
ciel et d'obtenir des informations sur elle. On voulait également en apprendre d'avantages sur le sujet avec une fonction "news" qui montre l'actualité du domaine.

Après avoir réfléchis aux options qui s'offraient à nous, l'idée d'une application pour les astronomes amateurs leur permettant de faire des recherches d'objets stellaires était la solution qui s'offrait à nous.

## Ce qui a fonctionné :heavy_check_mark:
De manière générale la structure de la page souhaitée ainsi que la mise en forme à été réussi. Les différentes API utilisées ainsi que les quelques fonctionnalités ont été un succès.

Une vue-iFrame a été ajoutée après coup sur une page d'observation des étoiles, ce qui donne un effet un peu plus pro à l'application et apporte un côté pratique. Un tableau est affiché avec les informations importantes de l'étoile pour l'observateur et une carte du ciel y est affiché avec la position relativement précise de l'objet dans le ciel nocturne.

Concernant la partie de la photo du jour, cela était relativement simple car l'API nommée "APOD", pour Astronomy Picture Of the Day, est très utilisée et une bonne documentation y est fournit. 

Dans l'ensemble le produit finis respecte les quelques schémas qui ont été réalisés au tout debut du projet et dispose d'une structure comme suite:

### Page d'accueil avec deux choix
Recherche et photo du jour

### Dans la partie recherche 
Entrer le nom d'une étoile pour obtenir ses informations, afficher correctement les informations avec un tableau, avoir un historique des recherches de nom d'étoiles, afficher la position de l'étoile dans le ciel

### Dans la partie photo du jour 
Récuperer la photo du jour ainsi que le descriptif de la photo et son titre depuis l'API de la NASA et mise en forme des données reçues

## Ce qui a posé problème :x:
Utiliser l'API de Google Image qui nous aurait permis de récupérer la première image de la recherche 
du nom d'étoiles. Cela n'a pas fonctionné, nous avons décidé de supprimer cette fonctionnalité.

Le vue-iFrame fonctionne très bien mais, dans la console, il emet quelques erreur. Ces erreurs sont minimes mais elles sont là. Ils n'ont pas pu être réglé dans les délais impartis au vu des dernières fonctionnalités à faire fonctionner.

Aussi, en ouvrant le programme avec view deployment sur GitHub, vue-iFrame ne fonctionne pas à cause du http fonctionnant sur la version sécurisée. Le fait est que nous ne pouvons pas faire fonctionner la page, nommée SkyMap, avec du http. Il ne s'affiche donc pas dessus.

L'utilisation de vue-Chartjs a été compliqué. Il a fallu télécharger une version antérieure à la dernière à jour. Le fonctionnement de celle-ci a ensuite été difficile à comprendre mais, grâce à la documentation, le problème a pu être réglé.
Le problème principale pour cette partie a été de comprendre que la Chart doit se trouver sur un nouveau composant et d'envoyer les informations de la position depuis le parent à l'enfant, qui est la Chart.
La commande d'installation de la version de la Chart utilisée est la suivante : 

```
npm i chart.js@2.9.4
```
De plus, la page doit être rechargé si nous voulons obtenir la position d'une nouvelle étoile sur la map, après une seconde recherche. Autrement, la position de la première étoile ne change pas.

## Leçons apprises :repeat:
Bien évidement il y a eu toute la partie technique (code) qui nous a values beaucoup de recherches. 
Lire beaucoup de documentation et de faire les liens nécessaires avec notre projet pour arriver au 
résultat souhaiter.

Il y a également le travail d'équipe, de trouver des solutions ensemble face aux problèmes 
rencontré. De se partager le travail en fonction des compétences de chacun, puis faire des mises en commun 
chaque semaine. Une autre chose étant de tenir des délais quand on se fixais pour chaque semaine 
la liste des tâches à faire.

La documentation a été un point majeur du travail. La méthodologie de recherche, savoir déméler les informations et la compréhension général des outils que nous avons dû utiliser était le point essentiel selon nous.

## Architecture :classical_building:
Il y a différentes parties dans l'architecture : Les vues, les composants, le routeur et les assets.

Dans les vues, on y trouve l'App.vue et le Home.vue. Ce sont des vues car ils sont utilisés par les itinéraires du routeur.

Les composants sont Recherche et StarOfTheDay car ils viennent juste après Home. On y accède depuis la vue Home. C'est un choix qui a été fait mais, évidemment, nous aurions pu faire autremement.
ScatterChart est aussi un composant mais il n'est pas accessible à proprement parlé par le routeur. C'est ce qui permet d'afficher la chart (de type scatter) et est donc l'enfant de Recherche. Il n'était pas possible de l'écrire directement sur le composant Recherche c'est pourquoi un nouveau composant a été créé.

Le routeur se trouve dans index.js.

Dans assets, on y trouve la map qui est utilisé dans Recherche pour afficher la position de l'étoile.
