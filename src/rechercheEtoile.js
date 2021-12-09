
let searchButton = document.querySelector("#userInput");

document.addEventListener("click", () => {
  console.log("La page se charge");
  sendApiRequest();
});

async function sendApiRequest(){
    let response = await fetch(`https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=mission_exocat&format=json`);
    console.log(response);

    let data = await response.json();

    let input = document.getElementById("userInput").value;

    const found = data.find(element => element.star_name === input);

    console.log(found);
    console.log(data);
    useApiData(found);
}

function useApiData(data){
    document.querySelector("#nom").innerHTML = data.star_name;
    document.querySelector("#nom_scientifique").innerHTML = data.tm_name;
    document.querySelector("#latitude").innerHTML = data.rastr;
    document.querySelector("#longitude").innerHTML = data.decstr;
}