import React,{useState} from 'react'
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import {isAuthenticated} from '../auth'
import {createOrder} from './ApiCore'
import {Redirect} from 'react-router-dom'
import {emptyCart} from './CartHelper'


const PaystackPayment = ({products}) => {

    const {user: {firstname, lastname, phone, email}} = isAuthenticated()

    const [redirect, setRedirect] = useState(false);

      const token = isAuthenticated() && isAuthenticated().token;
      const userId = isAuthenticated() && isAuthenticated().user._id;

      const getTotal =()=>{
        // Reduce menthod is use to sum up or calculate array so you can have an output

        return products.reduce((currentValue , nextValue)=>{
            return currentValue + nextValue.count * nextValue.price
        }, 0)
    }


    const getROI =()=>{
      // Reduce menthod is use to sum up or calculate array so you can have an output
      return products.reduce((currentValue , nextValue)=>{
          return currentValue + nextValue.count * nextValue.roi
      }, 0)
  }

  const roi = getROI()
  
  const amountReturn = getTotal()

  const redirectTo =() =>{
    if(redirect){
      return <Redirect to="/dashboard/payment-successful" />;
    }
   
  } 
  

    const config = {
        reference: (new Date()).getTime(),
        id:`${userId}`,
        first_name:`${firstname}`,
        email: `${email}`,
        amount: getTotal()*100,
        phone:`${phone}`,
        publicKey: 'pk_test_a815152c258cac8171ce89cce31aa797ca98ed29',
       
       
    };
      // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

    const createOrderData = {
        products: products,
        returns : roi,
        transaction_id : reference.transaction,
        amount : amountReturn,
       // status: reference.status
     }

     createOrder(userId, token, createOrderData).then((res)=>{
          if(res.error){
            console.log('Error')
        }else{
        
          emptyCart(()=>{ 
        
          setRedirect(true)      
              })
        }
     })
  };

  // you can call this function anything
  const onClose = () => {   
    console.log('closed')  
  }
    
    const PaystackHook = () => {
        const initializePayment = usePaystackPayment(config);
        return (
            <div className="payment">
                
                <button className="btn btn-light px-4 py-2"
                 style={{background:"rgb(5 47 82)", borderRadius:"5px"}}
                 onClick={() => {
                    initializePayment(onSuccess, onClose)
                }}>  <img src="/images/paystack.png" width="100" /></button>

                {redirectTo()}
            </div>
        );
    };
    
  
     

    return (
        <div>    
           {PaystackHook()}      
        </div>
      );
}

export default PaystackPayment
