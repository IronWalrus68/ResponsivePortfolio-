//here it has the form set, it can take data from that, and display on the body.

// we want it make a new child in the content body, so add a new div into the section. 
// then ones a new div is made, add the image from the api.

// > to start, lets make it so when the button is clicked it creats a new div, has the styles from the css
// > ones the div is there and a new one is generated when search is clicked, add the data from the api.

const form = document.querySelector('#searchForm')
const gridBody = document.querySelector('.gridBody')
// - \/ - when form is submitted get images from api and clear search bar
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const serchTerm = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${serchTerm}`);
    // console.log(res.data)
    displayImages(res.data) //this displays images
    form.elements.query.value = '';
})

const displayImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            // console.log(shows)
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            // document.body.append(img)
            // document.gridBody.append(div);
            let newDiv = document.createElement('div')
            newDiv.append(img)
            newDiv.className = "card"
            gridBody.appendChild(newDiv)
        }
    }
}