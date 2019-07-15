
const quoteHandler = document.createElement('button')
const localHandler = document.createElement('button')
const h2Tag = document.createElement('h2')
const rootHandler = document.getElementById('root')
quoteHandler.innerHTML = 'Get another quote'
localHandler.innerHTML = 'save to local'
rootHandler.appendChild(quoteHandler)
rootHandler.appendChild(localHandler)
axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40`)
    .then(function (response) {
        quoteHandler.addEventListener('click', function () {
            const data = response.data
            const rand = Math.round(Math.random() * (data.length - 1))
            console.log(rand)
            console.log(data[rand].content)
            h2Tag.innerText = data[rand].content
            rootHandler.appendChild(h2Tag)
            if (data) {
                localData(data[rand].content)
            }
        })
    })
    .catch(function (err) {
        console.log(err)
    })
function localData(data) {
    localHandler.addEventListener('click', function () {
        localStorage.setItem('quotes', JSON.stringify(data))
        const parsedStorage = JSON.parse(localStorage.getItem('quotes'))
        localHandler.innerText = 'saved'
        localHandler.disabled = true
        rootHandler.appendChild(localHandler)
        console.log(localStorage)
    })
}