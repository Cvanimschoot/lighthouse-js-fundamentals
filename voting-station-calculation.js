const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations (arrayOfStations) {
  let goodStations = [];
  for(let i = 0; i < arrayOfStations.length; i++) {
    if(stations[i][1] >= 20) {
      if(stations[i][2] === 'school' || stations[i][2] === 'community centre'){
        goodStations.push(stations[i][0]);
      }
    }
  }
  return(goodStations);
}

let stringOfStations = chooseStations(stations);
console.log(stringOfStations);

// This is the optimized way of doing it:
/*

const chooseStations = function (stations) {
  let goodStations = [];
  for(let i = 0; i < stations.length; i++) {
    if(stations[i][1] >= 20) {
      if(stations[i][2] === 'school' || stations[i][2] === 'community centre'){
        goodStations.push(stations[i][0]);
      }
    }
  }
  return(goodStations);
}

*/