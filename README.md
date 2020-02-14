## Navigate to the folder

### `cd spottabl `

In the project directory, you can run:

## Install dependencies 

### `npm install`

## Run the application

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Application has two pages, Team page and Search page 
---


### Teams Page

<img src="../spottabl/src/Assets/Images/team.png" width="600" height="400">

All members photos are shown with a slider, once you select a member, his photo will be expanded and the details will be populated in the box on the left side. The data is stored as a json file `src\Data\Team.json` 


### Search Page

<img src="../spottabl/src/Assets/Images/Search.png" width="600" height="400">

Jobs based on Title and Company name can be searched in the search box. There is a filter on the right side which can be used to filter company. All results are paginated at a count of 5. The data is stored as a json file `src\Data\SearchList.json` 


### Main libraries used
* [React Slick](https://react-slick.neostack.com/) 
* [React Reveal](https://www.react-reveal.com/)
* [React Paginate](https://github.com/AdeleD/react-paginate)
* [Reactstrap](https://reactstrap.github.io/)




