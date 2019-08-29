function HashTag(word){
    this.word=word.split(' ')
    this.generateTag=function(){
        let output='#'
        for(let i=0;i<this.word.length;i++){
            output=output+this.word[i].charAt(0).toUpperCase()+this.word[i].slice(1).toLowerCase()
        }
        return output
    }
}
const tag1= new HashTag('hello world')
console.log(tag1.generateTag())
