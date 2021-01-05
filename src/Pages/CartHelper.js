export const addItem = (item, next ) =>{
   let cart = [];

   if(typeof window != undefined){
    if( localStorage.getItem('cart')){
        cart = JSON.parse( localStorage.getItem('cart'))
    }
    cart.push({
        ...item,
        count:1
    })


    //in order not have duplicate of product in the cart we have o iterate ,
    // and use the "new Set" which allow only unique id
    cart = Array.from( new Set(cart.map(p=>p._id))).map(id => {
        return cart.find(p => p._id === id)
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
   }
}


// Display number of added item in the cart
export const itemTotal = () =>{
   if (typeof window != undefined){
       if(localStorage.getItem('cart')){
           return JSON.parse(localStorage.getItem('cart')).length;
       }

      
   }

   return 0
}

//get all items from local storage

export const getCart = () => {
    if (typeof window !== undefined){
        if(localStorage.getItem('cart')){
            return JSON.parse(localStorage.getItem('cart'));
        }
        return [];
    }
   
 }

 export const updateItem =(productId, count)=>{

    let cart =[]
    if(typeof window !=="undefined"){
        if(localStorage.getItem('cart')){
         cart = JSON.parse(localStorage.getItem('cart'));
        }

        cart.map((product, i)=>{
            if(product._id ===productId){
                cart[i].count = count
            }
        });

        localStorage.setItem('cart', JSON.stringify(cart))
    }
 }

 export const removeItem =(productId)=>{

    let cart = [];
    if(typeof window !=="undefined"){
        if(localStorage.getItem('cart')){
         cart = JSON.parse(localStorage.getItem('cart'));
        }

        cart.map((product, i)=>{
            if(product._id === productId){
                cart.splice(i, 1);
            }
        });

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    return cart
 }

 export const emptyCart = next =>{
     if(typeof window !=="undefined"){
         localStorage.removeItem('cart');
         next();
     }
 }