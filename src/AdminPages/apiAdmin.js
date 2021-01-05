import {API} from '../config'

// create investment category


// create investment category
export const CreateCategory = ( userId, token, category) => {

    return fetch(`${API}/category/create/${userId}`, { 
        method:'POST',
        headers:{
            Accept: 'application/json',
           Authorization: `Bearer ${token}`

        },
        //convert the body data to json objects
        body: category
    }).then(response=>{
        return response.json()
    }).catch((error)=>{
     console.log(error)
     return error
    })
  } 
  
  // create investment category
export const AddProduct = ( userId, token, category) => {

    return fetch(`${API}/product/create/${userId}`, { 
        method:'POST',
        headers:{
            Accept: 'application/json',
           Authorization: `Bearer ${token}`

        },
        //convert the body data to json objects
        body: category
    }).then(response=>{
        return response.json()
    }).catch((error)=>{
     console.log(error)
     return error
    })
  }  



  // create investment category
export const CreateProduct = ( userId, token, product) => {

    return fetch(`${API}/product/create/${userId}`, { 
        method:'POST',
        headers:{
            Accept: 'application/json',
           Authorization: `Bearer ${token}`
        },
        //convert the body data to json objects
        body:product
    }).then(response=>{
        return response.json()
    }).catch((error)=>{
     console.log(error)
     return error
    })
  }

  export const createCategoryss = ( userId, token, category) => {

    return fetch(`${API}/category/create/${userId}`, { 
        method:'POST',
        headers:{
            Accept: 'application/json',
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`

        },
        //convert the body data to json objects
        body: JSON.stringify(category)
    }).then(response=>{
        return response.json()
    }).catch((error)=>{
     console.log(error)
     return error
    })
  }

  export const GetCategories = () =>{

    return fetch(`${API}/categories`, {
        method:'GET'
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })

  }


  //Delete product
  export const deleteProduct = (productId, userId, token) =>{
    return fetch(`${API}/product/${productId}/${userId}`, {
        method:'DELETE',
        headers :{
           Accept:"application/json",
          "Content-Type" : "application/json",
          Authorization : `Bearer ${token}`
        }
       
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }

  //Delete product
  export const deleteOrder = (orderId, userId, token) =>{
    return fetch(`${API}/order/${orderId}/${userId}`, {
        method:'DELETE',
        headers :{
           Accept:"application/json",
          "Content-Type" : "application/json",
          Authorization : `Bearer ${token}`
        }
       
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }


  // get Single Product

  export const getSingleProduct = (productId) => {
    return fetch(`${API}/product/${productId}/`,{
       method:"GET", 
    }).then((response)=>{
        return response.json();

    }).catch((error)=>{
        console.log(error)
    })
  }

  
  //update product
  export const updateProduct = (productId, userId, token, product) =>{
    return fetch(`${API}/product/${productId}/${userId}`, {
        method:'PUT',
        headers :{
           Accept:"application/json",
         // "Content-Type" : "application/json",
          Authorization : `Bearer ${token}`
        },
       body: product  // we are using product not json.stringyfy(product) because we are sending formDATA i.e we are also sending images
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }
  


  export const getAllUsers =(userId, token, sortBy) => {
    return fetch(`${API}/users/list/${userId}?sortBy=${sortBy}&order=desc `,{
       method:"GET", 
       headers :{
        Accept:"application/json",
     
       Authorization : `Bearer ${token}`
     }
    }).then((response)=>{
        return response.json();

    }).catch((error)=>{
        console.log(error)
    })
  }

  export const getAllOrders =(userId,token) => {
    return fetch(`${API}/order/list/${userId} `,{
       method:"GET", 
       headers :{
        Accept:"application/json",
     
       Authorization : `Bearer ${token}`
     }
    }).then((response)=>{
        return response.json();

    }).catch((error)=>{
        console.log(error)
    })
  }

  export const getStatusValues =(userId,token) => {
    return fetch(`${API}/order/status/${userId} `,{
       method:"GET", 
       headers :{
        Accept:"application/json",
     
       Authorization : `Bearer ${token}`
     }
    }).then((response)=>{
        return response.json();

    }).catch((error)=>{
        console.log(error)
    })
  }

  export const getOrderDetail =(userId, token,orderId ) => {
    return fetch(`${API}/order/${orderId}/detail/${userId} `,{
       method:"GET", 
       headers :{
        Accept:"application/json",
     
       Authorization : `Bearer ${token}`
     }
       
    }).then((response)=>{
        return response.json();

    }).catch((error)=>{
        console.log(error)
    })
  }

  export const updateOrderStatus =(userId, token,orderId, status ) => {
    return fetch(`${API}/order/${orderId}/status/${userId} `,{
       method:"PUT", 
       headers :{
        Accept:"application/json",
        "Content-Type": "application/json",
       Authorization : `Bearer ${token}`
     },
     body: JSON.stringify({status, orderId})
       
    }).then((response)=>{
        return response.json();

    }).catch((error)=>{
        console.log(error)
    })
  }