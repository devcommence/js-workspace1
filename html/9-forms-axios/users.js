const usersHandle = document.querySelector('#users')
const postsHandler = document.getElementById('posts')
function optionGenerator(parent, id, text) {
    const optionTag = document.createElement('option')
    optionTag.setAttribute('value', id)
    optionTag.innerHTML = text
    parent.appendChild(optionTag)
}
axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(function (response) {
        // return response.json()
        const users = response.data
        users.forEach(function (user) {
            optionGenerator(usersHandle, user.id, user.name)
        })
    })
    .catch(function (err) {
        console.log(err)
    })
usersHandle.addEventListener('change', function () {
    const id = usersHandle.value
    postsHandler.innerHTML = '<option value="">select</option>'
    if (id) {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(function (response) {
                const posts = response.data
                posts.forEach(function (post) {
                    optionGenerator(postsHandler, post.id, post.title)
                })
            })
            .then(function (post) {
                console.log(post)
            })
            .catch(function (err) {
                console.log(err)
            })
    }
})
