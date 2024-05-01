"use strict"

function GetAllScores(){
    let baseUrl = "https://localhost:3000/";
    return fetch(baseUrl + "scores/").
    then((response) => response.json());
}

// function GetScore(){
//     let baseUrl = "https://localhost:3000/";
//     let id = document.body.querySelector("#get_score")
//     return fetch(baseUrl + "scores/" + id).
//     then((response) => response.json());
// }


async function DisplayAll(){
    const character = await GetAllScores();
    let baliseAChercher = document.body.querySelector("#get_scores")
    baliseAChercher.innerHTML = `
    ${scores}
`
}

DisplayAll();

async function DisplayOne(){
    const character = await GetScore();
    let scores = document.body.querySelector("#test")
    div.innerHTML = `
    <p id=test>
    ${scores}
    </p>
`
}