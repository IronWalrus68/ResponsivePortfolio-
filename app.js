// for now what i want to work won't work until i have it on an actual server

//i'll need to have a server set up, have a folder with my images
//include that folder with node
//loop over it's conent then add the pictures as children to the .gridBody

const form = document.querySelector('#searchForm')

const gridBody = document.querySelector('.gridbody')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const serchTerm = form.elements.query.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${serchTerm}`);
    // console.log(res.data)
    displayImages(res.data)
    form.elements.query.value = "";
})

const displayImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}