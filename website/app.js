// Personal API Key for OpenWeatherMap API
const APIkey = '2fc823adbe732fc88b3f431d7f1a81c7';
const baseURL = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// Event listener to add function to existing HTML DOM element
//const location =  document.getElementById('zip').value;
//const feelings =  document.getElementById('feelings').value;
//document.getElementById('zip').addEventListener('click', performAction);

// Async POST
import fetch from "node-fetch";

async function postData(url = '', data = {}){
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

// Async GET
const retrieveData = async (url='') =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
};

// TODO-Chain your async functions to post an animal then GET the resulting data

function postGet(){
    postData('/animal', {fav:'lion'})
      .then(function(data){
        retrieveData('/all')
      })
  }
// TODO-Call the chained function



postGet()

//
/*
function performAction(e){  
    getAnimalDemo(baseURL,location, apiKey)
}

const getAnimalDemo = async (baseURL, location, apiKey)=>{
    // 1.
      const res = await fetch(baseURL+location+apiKey)
    // 2. Call Fake API
      // const res = await fetch('/fakeAnimalData')
      try {
  
        const data = await res.json();
        console.log(data)
        // 1. We can do something with our returned data here-- like chain promises!
  
        // 2. 
        // postData('/addAnimal', data)
      }  catch(error) {
        // appropriately handle the error
        console.log("error", error);
      }
    }
*/
/* Function called by event listener */

/* Function to GET Web API Data*/

/* Function to POST data */


/* Function to GET Project Data */

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();