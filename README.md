# Burger Lover

## Overview

The task represents an application to create ingredients and compile burgers from those ingredients.

## Workflow

As a user, I want to be able to add new ingredients for making burgers. The ingredients should have a name, image (link from the web is acceptable) and the number of calories. As a user I want to add Tags to each ingredient, for example, vegan, gluten-free, etc. to make burgers with specific ingredients only.
Once we have all ingredients, as a user I want to be able to view them on a separate ingredients page with the most important information in the list. The list needs to be sortable by calories, and filterable by tags. So if I click on the tag that’s assigned to that ingredient I will see all the ingredients with the same tag.

After we have all of our ingredients as a user I want to make my own burger.

When the page for making burgers is opened, the user should be able to name his burger, add a tag to the burger and should see the list of ingredients with a total number of calories. Plus points if the list of ingredients is searchable by name, filterable by tags, and sortable by calories.

When a user finishes making his special burger, the created burger should be listed on the burger overview page. Sorting the burgers based on name, calories is also a plus.
By clicking on each ingredient or burger from their lists, users should see the details about it.

When on the burgers or ingredients page, in both lists next to each element should be an edit and delete button, which when it is clicked gives the possibility to edit or delete the item.

## Technical information

### BURGERS API ENDPOINT:

### GET / POST

https://6195607a74c1bd00176c6d1f.mockapi.io

### GET BY ID / PUT / DELETE

/burgers/:id

### INGREDIENTS API ENDPOINT:

### GET / POST

https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients

### GET BY ID / PUT / DELETE

/ingredients/:id

## Additional information

Try to focus on providing as many features as possible. Great design is a bonus.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run deploy`

Deploy App on github pages
