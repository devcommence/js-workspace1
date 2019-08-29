const article={
    id:1,
    title:'js is awesome',
    publishDate:new Date(),
    author:'js',
    body: 'this is the body of the article',
    isReviewd:true
}

console.log(article)

console.log(article['author'])
console.log(article.tags) //undefined

console.log(typeof article ) //'object'

//const person={} or new Object()
//object is an unordered,string indexed, collection of values