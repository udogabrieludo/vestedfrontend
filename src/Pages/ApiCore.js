import {API} from '../config'
import queryString from 'query-string'


export const GetProducts = (sortBy) =>{

    return fetch(`${API}/products?sortBy=${sortBy}&limit=undefined&order=desc `, {
        method:'GET'
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
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


  export const getFilterProducts = (skip, limit, filters = {}) =>{
       const data = {
        limit,
        skip,
        filters
       }
        
    return fetch(`${API}/products/by/search`, {
        method:'POST',
        headers:{
            Accept: 'application/json',
            "Content-Type": " aplication/json"
        },
        body: JSON.stringify(data)
        }).then(response => {
            return response.json();
        }).catch(error =>{
            console.log(error)
        })

  }

  export const Lists = params =>{

     const query = queryString.stringify(params)
     console.log('query', query)
    // to use params we have to install npm package call query-string
    return fetch(`${API}/products/search?${query}`, {
        method:'GET'
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })

  }


  export const read = (productId) =>{

    return fetch(`${API}/product/${productId}`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }

  export const ProductRelated = (productId) =>{

    return fetch(`${API}/products/related/${productId}`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }

  export const createOrder = (userId, token, createOrderData) =>{

    return fetch(`${API}/order/create/${userId}/`, {
        method:'POST',
        headers:{
            Accept: 'application/json',
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({order: createOrderData})

    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }

  export const getUserInvestment = (userId, token) =>{

    return fetch(`${API}/orders/by/user/${userId}/`, {
        method:'GET',
        headers:{
            Accept: 'application/json',
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`
        },
       
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }


  ///Withdrawl Request


  export const withdrawRequest = (userId, token, createOrderData) =>{

    return fetch(`${API}/withdraw/request/${userId}/`, {
        method:'POST',
        headers:{
            Accept: 'application/json',
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({withdraw: createOrderData})

    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }