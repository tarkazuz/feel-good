const form = document.querySelector('form');
const search = document.querySelector('#search');
const resultList = document.querySelector("#resultList");

form.addEventListener('submit', 
    async function (e) { 
        e.preventDefault();
        //always make sure that the list is empty when doing a new search
        while (resultList.firstChild) {
            resultList.removeChild(resultList.firstChild);
        }
        document.querySelector('#noResults').toggleAttribute('hidden');
       
        //get the results from tvmaze API
        const userQuery = search.value;
        const dbSearch = await axios.get(`http://api.tvmaze.com/search/shows?q=${userQuery}`)
            .then((res) => {
                        //let the user know what they searched for before clearing out the input
                        document.querySelector('#noResults').innerHTML = `Your results for: ${userQuery}`

                        search.value = null;

                    //for each matching result
                    for(let i = 0; i<10; i++ ){
                        if(res.data[i] !== undefined){
                        
                            //create a new list element
                            const result = document.createElement('li');
                            //include show name as a title
                            const showTitle = document.createElement('h3');
                            if (res.data[i].show.premiered){
                                showTitle.innerHTML = ` ${res.data[i].show.name} (${res.data[i].show.premiered.slice(0,4)})`;
                            } else{
                                showTitle.innerHTML = res.data[i].show.name;
                            }
                            result.appendChild(showTitle);
                            //image
                         if(res.data[i].show.image){
                            const image = document.createElement('img');
                            image.src = res.data[i].show.image.medium;
                            result.appendChild(image)
                        }
                       
                         //summary
                        const summary = document.createElement('div');
                        summary.innerHTML = res.data[i].show.summary;
                        result.appendChild(summary)

                        //rating
                        
                       
                        resultList.appendChild(result)
                    }
                }
                
            })
            .catch((er)=>{
                console.log(er);
            })


    })

//back button
const backButton = document.querySelector(".backButton");

backButton.addEventListener('click', ()=>{
    window.history.back();
});