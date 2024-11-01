
export default function renderAbilities(array){
    let abilitiesText = document.querySelector('.js-abilities');
    abilitiesText.innerHTML = `<strong> Abilities: </strong> `;
    let mark;
    let newAbilities = [];
    let html = '';
    array.forEach(element => {
        newAbilities.push(element.ability.name)
    })
    
        for(let i=0; i < newAbilities.length; i++){
            if(i === newAbilities.length-1){
                mark = "."
            }else{
                 mark = ", "
            }
             html += `${ newAbilities[i] }` + `${mark}`;
        }
                
        abilitiesText.style.display = "block"
        abilitiesText.innerHTML += html;
}
