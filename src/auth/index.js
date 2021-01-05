    import {API} from '../config'

    // Sign up users
    export const signup = user =>{
        return fetch(`${API}/signup`, { 
            method:'POST',
            headers:{
                Accept: 'application/json',
               "Content-Type": "application/json"
  
            },
            //convert the body data to json objects
            body: JSON.stringify(user)
        }).then(response=>{
            return response.json()
        }).catch((error)=>{
         console.log(error)
         return error
        })
      }


      // Sign up users
    export const signin = user =>{
        return fetch(`${API}/signin`,{ 
            method:'POST',
            headers:{
                Accept: 'application/json',
               "Content-Type": "application/json"
  
            },
            //convert the body data to json objects
            body: JSON.stringify(user)
        }).then((respones)=>{
            return respones.json()
        }).catch((error)=>{
         return error
        })
      }


      // Auth authentication

      export const authenticate = (data, next) => {
  // we check if we have the window object, localstorage is one of the property of a window object
        if(typeof window !== 'undefined'){
                        //set localStorage item with name jwt and convert the javascript object  data to json strings
            localStorage.setItem('jwt', JSON.stringify(data))
            next();
        }
      }

      //Sign out

      export const signout = (next) =>{
          if(typeof window !=='undefined'){
              localStorage.removeItem("jwt");
              next();

              return fetch(`${API}/signout`, {
                  method: "GET"
              }).then( response =>{
                console.log('Sign out', response )
              })
              .catch( error => console.log('error', error))
           
          }

      }



      // This return true, if use is authenticated, to conditionally hide and show links
      export const isAuthenticated = () =>{
          if(typeof window == "undefined"){
              return false
          }
          if(localStorage.getItem("jwt")){
              return JSON.parse(localStorage.getItem('jwt'))
          }else{
              return false
          }
      }