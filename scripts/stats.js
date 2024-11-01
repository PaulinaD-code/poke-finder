export default function renderStats(array){
    let pokemonStats = document.querySelector('.js-base-stats');
    pokemonStats.innerHTML = `<strong> Stats: </strong>`
    let statsHTML = ''

    array.forEach(el => {
    statsHTML = `<li> ${el.stat.name}: ${el.base_stat} </li>`
    pokemonStats.innerHTML  += statsHTML;
  })

    pokemonStats.style.display = "block";
}