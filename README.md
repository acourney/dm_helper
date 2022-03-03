## Project Description

My site is called DM Helper. It's designed to help dungeon masters
create randomized NPCs and monsters quickly and effortlessly so they can focus
on the bigger details of their campaign.

This will pull from the dungeons and dragons API to generate NPCs with randomized races, classes, levels, spells, and items.

In the future, I'd like to add more details like names to NPCs and Monsters and
add options to generate templates for maps and rooms.

## Link to the API you plan to use

The link to fetch data:
https://api.open5e.com/

The link to the API documentation:
https://open5e.com/api-docs

## Example data response you plan to use

const DND_CLASS_URL = "https://api.open5e.com/classes/";

fetch(DND_CLASS_URL)
.then((res) => res.json())
.then((data) => {
console.log(data);
// pick a specific class
console.log(data.results[5].name);
// pick a random class
const random_index = Math.floor(Math.random() \* data.count);
console.log(data.results[random_index].name);
})
.catch((err) => console.error(`Oops, something went wrong: ${err}`));

## Visual of your component hierarchy

![project1 DM helper wireframe](https://media.git.generalassemb.ly/user/41109/files/1ac20380-9a26-11ec-9cf8-e33f03076946)

## Wire Frames

Each page will have a vertical nav bar on the left of the page and a header containing the page's name and site logo.

The home page will contain details about the site.
![project1 DM helper wireframe (1)](https://media.git.generalassemb.ly/user/41109/files/ea7c6400-9a29-11ec-8acd-72c5ed226394)

The input page will contain an optional form for users to input information about their party.
![project1 DM helper wireframe (2)](https://media.git.generalassemb.ly/user/41109/files/fc5e0700-9a29-11ec-88e3-e7211d0186c9)

The monster generator page will contain a button that, when clicked, will fetch data about monsters from the dungeons and dragons API to generate a randomized monster.
![project1 DM helper wireframe (3)](https://media.git.generalassemb.ly/user/41109/files/0f70d700-9a2a-11ec-98a7-6fc38be7bbc0)

The NPC generator page will contain two buttons.
Clicking one will take you to a page that fetches data from the dungeons and dragons API to generate a completely random NPC.
Clicking the other button will take you to a page listing all twelve classes in dungeons and dragons so you can generate an NPC of a specific class.

![project1 DM helper wireframe (4)](https://media.git.generalassemb.ly/user/41109/files/72fb0480-9a2a-11ec-8f51-48f1500dfbef)
![project1 DM helper wireframe (5)](https://media.git.generalassemb.ly/user/41109/files/7a221280-9a2a-11ec-9b63-f13bfcded5b6)
![project1 DM helper wireframe (6)](https://media.git.generalassemb.ly/user/41109/files/81492080-9a2a-11ec-9771-e431f5a7313b)

## User Stories

- As a user, I'd like to be able to generate completely random NPCs and Monsters to save time in planning characters for campaigns
- As a user, I'd like to be able to choose a class for my NPC to have some more specificity in what is generated
- As a user, I'd like to input details about my party to generate a monster with a difficulty rating more tailored to my party's levels
- As a user, I'd like inputting my party's information to be optional so I can generate a completely random monster with a randomized difficulty rating
- As a user I'd like to be able to navigate to different pages to input my information, generate NPCs, and generate monsters so the site can be more organized

### MVP Goals

- pull from the Dungeons and Dragons api to get information about races, classes, spells, and items to generate random NPCs
- store a user's party information to keep their average party level and their party size in state
- use the user's party information to generate a monster with a difficulty rating within the range of the party's ability to defeat it

### Stretch Goals

- add more options for the NPC that determine how much detail to give them, for example:
  1. throwaway NPC 2. recurring NPC 3. integral NPC
- Also pull from a random name generator API to be able to make names for the generated NPCs and Monsters
- Add a page to generate randomized maps for users
