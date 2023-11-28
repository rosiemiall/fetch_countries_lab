
const nameSection = document.querySelector("#nameSection")
const populationSection = document.querySelector("#population")
const capitalSection = document.querySelector("#capital")
const languagesSection = document.querySelector("#languages")
const getCountryByName = async (countryName) =>{
    const response = await fetch("https://restcountries.com/v3.1/name/"+countryName);
    const data = await response.json();
    console.log(data[0]);

    const population = data[0].population;
    const popOutput = document.createElement("p");
    popOutput.innerText = population;
    populationSection.appendChild(popOutput);

    const name = data[0].name.common;
    const nameOutput = document.createElement("p")
    nameOutput.innerText = name
    nameSection.appendChild(nameOutput)

    const languages = data[0].languages;
    const langOutput = document.createElement("p")
    const array = []
    // for (i = 0; i < languages.length; i++){
    //     array.push(languages[i])
    // }
    // Object.keys(languages).forEach((prop) => array.push(languages.prop))
    // langOutput.innerText = array
    langOutput.innerText =JSON.stringify(languages)
    languagesSection.appendChild(langOutput)

    const capital = data[0].capital;
    const capitalOutput = document.createElement("p");
    capitalOutput.innerText = JSON.stringify(capital);
    capitalSection.appendChild(capitalOutput);

    return data[0]
}

getCountryByName("peru");


// const printDetails = (countryName) => {
//     const country = getCountryByName(countryName).message;
//     console.log(country);
   
// }

// printDetails("peru")