export default function renderItems(array){
    let itemsText = document.querySelector('.js-items');
    itemsText.innerHTML = `<strong> Items: </strong> `;
    let itemsNames = [];
    let itemHTML = '';
    let mark;
            
        array.forEach(el=>{
            itemsNames.push(el.item.name)
        })

        for(let i=0; i < itemsNames.length; i++){
            if(i === itemsNames.length-1){
                mark = "."
            }else{
                mark = `, `
            }
                itemHTML += `${ itemsNames[i] }` + `${mark}`
            }

            if(array.length === 0){
                itemsText.style.display = "none" 
            } else{
                itemsText.style.display = "block"
                itemsText.innerHTML += itemHTML
            }
}