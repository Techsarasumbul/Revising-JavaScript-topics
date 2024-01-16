fetch('https://api.covid19api.com/summary')
    .then((apiData) => {
        console.log(apiData);
        return apiData.json();
    })
    .then((actualData) => {
        console.log(actualData)
        console.log(actualData.Countries);
        console.log(actualData.Countries[77]);
        console.log(actualData.Countries[77].Country);
        
        const myData = actualData.Countries[77];
        console.log(myData);
        console.log(myData.Country);
        console.log(myData.TotalConfirmed);
        document.getElementById("apiIndia").innerHTML = `Country: ${myData.Country}, Total Confirmed cases: ${myData.TotalConfirmed}`;

    })
    .catch((error) => {
        console.log(error);
    })
