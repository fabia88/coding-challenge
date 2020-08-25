export const fetchData = async (value) => {
  return await fetch(`${url_removed_for_privacy}?query=${value}`)
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error('Bad Request');
    }
  })
  .then(json => json.results)
}
