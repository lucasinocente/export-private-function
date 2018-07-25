let teste4 = () => {

    let teste = () => {
        let teste2 = () => {

            console.log("inner teste2")
        }
        return teste2;
    }

    let teste2 = () => {
        console.log("outter teste2");
    }
    
    return {
        teste2
    } 
}