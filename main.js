const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfdf01e300mshdbb1f6be8957d9cp151e8cjsne8d0b3796fe3',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

fetch('https://api-nba-v1.p.rapidapi.com/players?team=26&season=2021', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch("https://api-nba-v1.p.rapidapi.com/players?team=26&season=2021", options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE NOT OK");
    }
  })
  .then(function (data) {   
    displayPlayers(data);
  })
  .catch((error) => {
    console.error("FETCH ERROR:", error);
  });

function displayPlayers(data) {
    let tab = 
        `<tr>
          <th>First name</th>
          <th>Last name</th>
         </tr>`;

         console.log(tab)
    
    // Loop to access all rows 
    for (let r of data.response) {
        tab += `<tr> 
    <td>${r.firstname} </td>
    <td>${r.lastname}</td>
</tr>`;
console.log(tab)
    }
    // Setting innerHTML as tab variable
    document.getElementById("players").innerHTML = tab;
}


 /* const player = data.response[0];
  console.log(player)


const playerFirstName = player.firstname;
console.log(playerFirstName)
  const firstCol = document.getElementById("firstName");
  console.log(firstCol)
  firstCol.textContent = playerFirstName ;

const playerLastName = player.lastname;
console.log(playerLastName)
  const secondCol = document.getElementById("lastName");
  console.log(secondCol)
  secondCol.textContent = playerLastName ;
}
*/
