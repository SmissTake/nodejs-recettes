# NODEJS API

Discovery of NodeJS with the development of an API to access a recipe database.

## LAUNCH
To start the project:
```
$ npm run dev
```
URL: [127.0.0.1:8100](127.0.0.1:8100)

---

## GET
GET with recipe ID: [127.0.0.1:8100/recipe/show/ID](127.0.0.1:8100/recipe/show/1)

GET with recipe name: [127.0.0.1:8100/recipe/showone/NAME](127.0.0.1:8100/recipe/showone/Gratin)

## POST

Add recipe : [127.0.0.1:8100/recipe/add](127.0.0.1:8100/recipe/add)

Parameter: Body > raw > JSON
```
{
    "name" : "Recipe name",
    "slug" : "slug-recipe",
    "guests" : "4",
    "idCourses" : "2",
    "idUsers" : "1"
}
```

## PUT

Update recipe : [127.0.0.1:8100/recipe/update/ID](127.0.0.1:8100/recipe/update/1)

Parameter: Body > raw > JSON
```
{
    "name" : "Recipe name",
    "slug" : "slug-recipe",
    "guests" : "4",
    "idCourses" : "2",
    "idUsers" : "1"
}
```
*Each parameter is optional*