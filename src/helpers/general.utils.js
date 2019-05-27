export const fetchData = async (value) => {
  return await fetch(`https://api.earlytestabc.plugify.nl/autocomplete.json?query=${value}`)
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error('Bad Request');
    }
  })
  .then(json => json.results)
}
