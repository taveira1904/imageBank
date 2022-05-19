const input = document.getElementById('input')
const grind = document.getElementsByClassName('grid')



input.addEventListener('keydown', function(e){
    if(e.key === 'Enter')
    loadImg();
   
})

function loadImg(){
    removeImgs();

    const url = 'https://api.unsplash.com/search/photos?query='+input.value+'&per_page=12&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
   
    fetch(url)
    
    .then(response =>{
       if(response.ok)
       return response.json()
       else
       alert(response.status)
    })
    
    .then(data =>{
        const images = [];
        for(let i = 0; i<data.results.length; i++){
            images[i] = document.createElement('div')
            images[i].className = 'img'
            images[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')'
          
            grid.appendChild(images[i])
        }
    })

}
function removeImgs(){
    grid.innerHTML='';



}