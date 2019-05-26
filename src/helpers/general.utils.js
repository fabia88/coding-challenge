export const fetchData = async (value) => {
  const response = await fetch(`https://api.earlytestabc.plugify.nl/autocomplete.json?query=${value}`);
  const data = await response.json()
  return data.results
}
