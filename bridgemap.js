let mapCenter = [30, -93]
let zoomlevel = 3

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomlevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(bridgeMap)



let bridge = [

    { 
        name: 'Verrazano-Narrows Bridge', 
        citystate: 'New York, NY',
        span: 1298.4,
        location: [40.6066, -74.0447]
    },
    {
        name: 'Golden Gate Bridge', 
        citystate: 'San Francisco and Marin, CA',
        span: 1280.2,
        location: [37.8199, -122.4783]
    },

    { 
        name: 'Mackinac Bridge', 
        citystate: 'Mackinaw and St Ignace, MI',
        span: 1158.0,
        location: [45.8174, -84.7278]
    },
    
    { 
        name: 'George Washington Bridge	', 
        citystate: 'New York, NY and New Jersey, NJ',
        span: 1067.0,
        location: [40.8517, -73.9527]
    },

    { 
        name: 'Tacoma Narrows Bridge', 
        citystate: 'Tacoma and Kitsap, WA',
        span: 853.44,
        location: [	47.2690, -122.5517]
    },


]

bridge.forEach( bridge => {
    let location = bridge.location
    let name = bridge.name
    L.marker(location)
        .bindPopup('This bridge is called ${name}')
        .addTo(bridgeMap)
})


let data = [
    { name: "Verrazano-Narrows Bridge", city: "New York, NY", span: 1298.4, lat: 40.6066, lng: -74.0447 },
    { name: "Golden Gate Bridge", city: "San Francisco and Marin, CA", span: 1280.2, lat: 37.8199, lng: -122.4783 },
    { name: "Mackinac Bridge", city: "Mackinaw and St Ignace, MI", span: 1158.0, lat: 45.8174, lng: -84.7278 },
    { name: "George Washington Bridge", city: "New York, NY and New Jersey, NJ", span: 1067.0, lat: 40.8517, lng: -73.9527 },
    { name: "Tacoma Narrows Bridge", city: "Tacoma and Kitsap, WA", span: 853.44, lat: 47.2690, lng: -122.5517 }
  ];



let bridgeNames = [];
let spanLengths = [];
  
for (let i = 0; i < data.length; i++) {
    bridgeNames.push(data[i].name);
    spanLengths.push(data[i].span);
  }  


  let ctx = document.getElementById("myChart").getContext("2d");

  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: bridgeNames,
      datasets: [{
        label: "Bridge Spans",
        data: spanLengths,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(60, 150, 250, 2)",
        borderWidth: 2
      }]
    },
  });