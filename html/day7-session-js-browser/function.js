function construct(){
    return {
        add:function(){
            return 'add'
        },
        sub:function(){
            return 'sub'
        }
    }
}
const result=new construct()

const addFunction=result.add
const subFunction=result.sub

console.log(addFunction())