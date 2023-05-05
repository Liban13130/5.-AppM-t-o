// http://api.airvisual.com/v2/nearest_city?key={800f08d3-c18c-4abe-b706-f0c75f7470c9}

const errorInformation = document.querySelector('.error-info');
const loader = document.querySelector('.loader-container');

async function getWeatherData(){
    try {
        const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=800f08d3-c18c-4abe-b706-f0c75f7470c9").catch(() => {
            throw new Error("Problème de connexion...")
        })
        console.log(response);
        
        if(!response.ok){
            throw new Error(`Erreur ${response.status}, ${response.statusText}`)
        }

        const dataResponse = await response.json()
        const triData = {
            city: dataResponse.data.city,
            country: dataResponse.data.country,
            temperature: dataResponse.data.current.weather.tp,
            iconId: dataResponse.data.current.weather.ic
        }

        populateUI(triData)

    } catch (error) {
        loader.classList.remove("active")
        errorInformation.textContent = error.message
    }
}

getWeatherData()
// document.querySelector('.get-data').addEventListener('click', getWeatherData)


const city        = document.querySelector('.city-name');
const country     = document.querySelector('.country-name');
const temperature = document.querySelector('.temperature');
const iconId      = document.querySelector('.info-icon');

function populateUI(data){
    city.textContent = data.city
    country.textContent = data.country
    temperature.textContent = `${data.temperature}°`
    iconId.src = `ressources/icons/${data.iconId}.svg`
    iconId.style.width = "150px"
    loader.classList.remove("active")
}