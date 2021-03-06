# One Stop Shop
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](	https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)


## Navigation

- [Purpose](#purpose)

- [Demonstration](#demonstration)

- [Challenges](#challenges)

- [Future Development](#future-development)

- [Credits](#credits)

&nbsp;

## Purpose

An app to order groceries delivered straight to your home!
In an era where restrictions abound, and a trip to the supermarket can be either too inconvenient or too daunting, curbside delivery is more common than ever. But what if you could get everything you need without leaving the comfort of your own home? That's where One Stop Shop comes in! This app makes purchasing your groceries online quick and easy. Simply log in or sign up using the provided form or the Passport module through GitHub, browse products by department, sort by name or price, and start adding things to your cart. Sign up today!

&nbsp;

## Demonstration

The following video will show you how easy it is to shop with One Stop Shop.

![Demo video](./assets/one-stop-shop-demo.gif)

&nbsp;

## Challenges

One of the challenges we faced as a group was connecting the front and back end. We needed to get items in the product table to show up in a product card Handlebars partial,  but only the ones for a specific department. We accomplished this by iterating each product according to its department id number, and showing only those when the department link is clicked. We also weren't sure how to implement sorting, since the partials contain JSON data that would change every time. We ended up wrapping the whole partial in an element with the relevant information, and appending that element and its children so that no data would be lost on repeated sorting.

&nbsp;

## Future Development

In the future, we'd like to implement login using [Passport](https://www.passportjs.org/) and [passport-github](https://www.npmjs.com/package/passport-githubhttps://www.npmjs.com/package/passport-github). This would allow users to use their GitHub credentials on the site. We'd also like to add a checkout feature that tells users their order has been placed and clears their cart. And in general, more products and departments would make the site feel more real. We could also add new pages like an about section, contact form and a legal disclaimer.


&nbsp;


## Credits

Thank you for viewing our project!

&nbsp;

Made by Forrest Mills, Brenham Pozzi, and Mike Bashford.
