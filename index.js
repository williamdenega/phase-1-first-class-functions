


function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction() {
    return function nf(){
        console.log("this is a fucntion")

    }
}


function returnsAnAnonymousFunction(){
    return function(){
        return
    }
}