import {API} from '../config'


export const readUser = (userId, token,) =>{

    return fetch(`${API}/users/${userId}`, {
        method: 'GET',
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

  //update User
//  export const update = (userId, token, user) =>{
 //   return fetch(`${API}/users/${userId}`, {
 //       method:'PUT',
 //       headers :{
//           Accept:"application/json",
 //         "Content-Type" : "application/json",
 //         Authorization : `Bearer ${token}`
 //       },
 //      body: JSON.stringyfy(user)
 //   }).then(response => {
 //       return response.json();
//    }).catch(error =>{
  //      console.log(error)
//    })
//  }

  export const updateUser = ( userId, token, userData) =>{
    return fetch(`${API}/user/${userId}`, {
        method:'PUT',
        headers :{
           Accept:"application/json",
     //     "Content-Type" : "application/json",
          Authorization : `Bearer ${token}`
        },
        //When sending formData we do not user json.string we send the object direct cos it contains image or files
       body: userData
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }

  export const updateUserByAdmin = ( userId, token, userData) =>{
    return fetch(`${API}/user/update/${userId}`, {
        method:'PUT',
        headers :{
           Accept:"application/json",
     //     "Content-Type" : "application/json",
          Authorization : `Bearer ${token}`
        },
        //When sending formData we do not user json.string we send the object direct cos it contains image or files
       body: userData
    }).then(response => {
        return response.json();
    }).catch(error =>{
        console.log(error)
    })
  }

  
  //update localstorage

  export const updateLocalStorage =(user, next) =>{
    if(typeof window != undefined){
        if(localStorage.getItem('jwt')){
            let auth = JSON.parse(localStorage.getItem('jwt'));
            //jwt has user property that why we can assess the .user
            auth.user = user
            localStorage.setItem('jwt', JSON.stringify(auth));
          //callnack we can set a redirect after success
            next();
        }
    }
  }