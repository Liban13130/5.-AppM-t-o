// http://api.airvisual.com/v2/nearest_city?key={800f08d3-c18c-4abe-b706-f0c75f7470c9}

const loader = document.querySelector('.loader-container');
const errorInformation = document.querySelector('.error-info');

async function getWeatherData(){
    try {  // Try = essaie ce code et si il y'a une erreur alors CATCH (ATTRAPE LA)
        const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=800f08d3-c18c-4abe-b706-f0c75f7470c9") //On attend le resultat de fetch
        //La methode fetch va effectuer une requete http, on recupere les donnés et on attend la response juste en bas

        const responseData = await response.json() // On attend le resultat de json car sinon on ne peut pas lire les données. 
        // Pour pouvoir lire la reponse json on utilise await aussi pour lire le JSON et pour UTILISER LES DONNES que l'on souhaite
        // Ensuite on utilisera une fonction qui affichera les données que l'on a trié dans un objet

        const triData = {
            city: responseData.data.city,
            country: responseData.data.country,
            iconId: responseData.data.current.weather.ic,
            temperature: responseData.data.current.weather.tp
        }
        console.log(triData);
    } catch (error) {
        
    }
}

getWeatherData()