let article={
    title:'js is awesome',
    tags:'programming',
    publishDate:new Date()
}
const updateArticle={
    title:'js is really awesome',
}

//article.title=updateArticle.title

Object.assign(article,updateArticle)
console.log(article)