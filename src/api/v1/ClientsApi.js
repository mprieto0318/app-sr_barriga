const BASE_URL = 'http://localhost:3000/api';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const result = await fetch(url, options)
    .then(function(response) {
      
      console.log("status", response.status);     //=> number 100–599
      console.log("statusText", response.statusText); //=> String
      console.log("headers", response.headers);    //=> Headers
      console.log("url", response.url);        //=> String
      //return response.text()
      return response.json();
    }, function(error) {


      switch (error.message) {
        case "Failed to fetch":
          return {error:true, msg: `Error al conectar a: ${url} posible CORS Policy 'Access-Control-Allow-Origin' - ${error.message}`};
      
        default:
            return {error:true, msg: `Error al conectar a: ${url} - ${error.message}`};
      }
  });

  console.log('--------- Result ----------');
  console.log("result", result);
  
  return result;
}


const ClientsApi = {
  services: {
    list() {
      //throw new Error('500: Error Fatal');
      return callApi('/client');
      return [
        {
          "id": "ff53b940-d5b3-4a66-ad78-af58a9323458",
          "firstName": "Eudora",
          "lastName": "Daugherty",
          "email": "Raina_Hettinger@yahoo.com",
          "jobTitle": "Global Metrics Technician",
          "twitter": "EudoraDaugherty44214-4039",
          "avatarUrl": "https://www.gravatar.com/avatar/e19db69107841cab64edd704fa177509?d=identicon"
        },
        {
          "id": "9c2c7b04-532f-4c13-abbd-bcf694d9fe11",
          "firstName": "Leonie",
          "lastName": "Towne",
          "email": "Reyes.Senger@yahoo.com",
          "jobTitle": "Customer Markets Coordinator",
          "twitter": "LeonieTowne65019-2735",
          "avatarUrl": "https://www.gravatar.com/avatar/2418114906f2bea38d7485340a7f0461?d=identicon"
        }
      ];
      //return []; Retornar vacio
      
    },
    create(values) {
      return callApi(`/client`, {
        method: 'POST',
        body: JSON.stringify(values),
      });
    },
    read(id) {
      return callApi(`/client/${id}`);
    },
    update(id, values) {
      return callApi(`/client/${id}`, {
        method: 'PUT',
        body: JSON.stringify(values),
      });
    },
    remove(id) { // No nombrar este metodo como `delete`, porque es un keyword en JavaScript
      return callApi(`/client/${id}`, {
        method: 'DELETE',
      });
    },
  },
};

export default ClientsApi;
