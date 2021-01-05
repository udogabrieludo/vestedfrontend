import React, { useState } from 'react';
import { useFlutterwave } from 'flutterwave-react-v3';
import {isAuthenticated} from '../auth'
import {createOrder} from './ApiCore'
import {Redirect} from 'react-router-dom'
import {emptyCart} from './CartHelper'



 
const FlutterwavePayment =({products}) =>{

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
  const config = {
    public_key: "FLWPUBK_TEST-75d4697b8a8027f4718374055b76c469-X", // FLWPUBK-0caafc81c819e4fdbb1ca9ab3c4919f3-X
    tx_ref: Date.now(),
    amount: getTotal(),
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: `${email}`,
      phone_number: `${phone}`,
      name: `${firstname} ${lastname}`,
     
    },
  //  redirect_url:"http://127.0.0.1:3000/dashboard/overview",
    customizations: {
      title: 'VestedMoney',
      description: 'Flutterwave',
      logo: 'http://vestedmoney.com/wp-content/uploads/2019/09/VestedMoney-Logo-ICON-.png',
    },
    
  };
 
  const redirectTo =() =>{
    if(redirect){
      return <Redirect to="/dashboard/payment-successful" />;
    }
   
  } 
  
 const closePaymentModal = () =>{

  document.getElementsByName('checkout')[0].setAttribute('style',
    'position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;');
  document.body.style.overflow = '';
  
  }

  const handleFlutterPayment = useFlutterwave(config)

  const flutterPay = () => {
    
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
        
          const createOrderData = {
            products: products,
            returns : roi,
            transaction_id : response.transaction_id,
            amount : response.amount,
          //  status:response.status
         }
         
         
         createOrder(userId, token, createOrderData).then((res)=>{
            if(res.error){
                console.log('Error')
            }else{
              closePaymentModal();
              emptyCart(()=>{ 
             
              setRedirect(true)      
                  })
            }
         //emptyCart(()=>{ 
               
         //  })
         
         })               
          },
          onClose: () => {
            console.log('Cancel payment')
          },
        });
          

    
   
  
  }
   
 
  return (
    <div>
     
       <button
      style={{background:"rgb(241 240 235 / 53%)", borderRadius:"5px", border:" 1px solid #f1a702"}}
      className="btn btn-light  px-4 py-2"
        onClick={()=>{
          flutterPay();
        }}
      >
       <img src="/images/flutterwave.png" width="100"  alt="img"/>
      </button>
     
  
       {redirectTo()}
    </div>
  );
}

export default  FlutterwavePayment;