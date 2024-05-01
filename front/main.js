/////////////////////slider/////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    loop: true,

    autoplay: {
      delay: 3000,
    },

  });

});


///////////////////////////////////////////// tableau score

// const scores = [
//   { userId: 1, satisfactionScore: 80, environnementScore: 75, argentScore: 90 },
//   { userId: 2, satisfactionScore: 85, environnementScore: 70, argentScore: 85 },
//   { userId: 3, satisfactionScore: 90, environnementScore: 80, argentScore: 95 }
// ];


// function populateScoreTable() {
//   const scoreTableBody = document.getElementById('scoreTableBody');
//   scores.forEach(score => {
//       const row = document.createElement('tr');
//       row.innerHTML = `
//           <td>${score.userId}</td>
//           <td>${score.satisfactionScore}</td>
//           <td>${score.environnementScore}</td>
//           <td>${score.argentScore}</td>
//       `;
//       scoreTableBody.appendChild(row);
//   });
// }


// populateScoreTable();







// function populateScoreTableFromServer() {
//   fetch('getScores.php')
//       .then(response => response.json())
//       .then(scores => {
//           const scoreTableBody = document.getElementById('scoreTableBody');
//           scoreTableBody.innerHTML = ''; 

//           scores.forEach(score => {
//               const row = document.createElement('tr');
//               row.innerHTML = `
//                   <td>${score.id}</td>
//                   <td>${score.Satisfaction_score}</td>
//                   <td>${score.Environnement_score}</td>
//                   <td>${score.Argent_score}</td>
//               `;
//               scoreTableBody.appendChild(row);
//           });
//       })
//       .catch(error => console.error('Error fetching scores:', error));
// }


// populateScoreTableFromServer();


// async function DisplayAllScores() {
//   const scores = await GetAllScores(); 

//   const tbody = document.getElementById("#get_scores");

//   tbody.innerHTML = '';


//   scores.forEach(score => {
//       const row = document.createElement('tr'); 


//       row.innerHTML = `
//           <td>${score.userId}</td>
//           <td>${score.satisfactionScore}</td>
//           <td>${score.environnementScore}</td>
//           <td>${score.argentScore}</td>
//       `;

//       tbody.appendChild(row); 
//   });
// }

// DisplayAllScores();



