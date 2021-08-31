let randoBot = setInterval(function(){

    var functions = []

    for(var prop in rando){
        if(typeof rando[prop] === 'function'){
            functions.push(prop);
        }
    }

    var randomFunctionIdx = Math.floor(Math.random() * functions.length);

    rando[functions[randomFunctionIdx]]();
    
}, 500);