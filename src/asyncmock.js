const products = [
    {nombre: "SHOES", precio: 200, id: "1", img: "/img/SHOES.jpg", idCat:"2"},
    {nombre: "SHIRT", precio: 90, id: "2", img: "/img/SHIRT.jpg", idCat:"2"},
    {nombre: "BRUSH", precio: 40, id: "3", img: "/img/BRUSH.jpg", idCat:"3"},
    {nombre: "FRAGRANCE", precio: 120, id: "4", img: "/img/FRAGRANCE.jpg",idCat:"3"},
  
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( ()=> {
            resolve(products);
        }, 2000)
    })
}


export const getProduct = (id) => {
return new Promise(resolve => {
    setTimeout(()=> {
    const product = products.find(prod => prod.id === id);
    resolve(product);
    }, 2000)    
    })
}

export const getProductsByCat = (idCategory) => {
    return new Promise( resolve => {
        setTimeout ( () => {

            const productsCat = products.filter(prod => prod.idCat === idCategory);
            resolve(productsCat);
        }, 100)

        })
    }


