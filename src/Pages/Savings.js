import React, {useState, useEffect, useLayoutEffect} from 'react'
import Dashboard from './Dashboard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {GetCategories, getFilterProducts} from './ApiCore'
import Loader from '../FullPageLoader/Loader';
import Card from './Card'


export default function Savings() {
    
     
    const saving =  () =>{
        return (
           <>
           
           <div className="container">
            <div className="row">
               <div className="col-md-12 mt-3" style={{ fontFamily : "poppins"}}>
                 <h3 style={{textTransform:"capitalize"}} className="pb-4"></h3>  

                 <div className="text-center " style={{fontFamily:"poppins"}}>
                  <img src="/images/searching-amico.png" width="250px "className="img-fluid" />
                  <div>
                  <small>Savings</small>
                  <h3>Coming Soon!</h3>
                  </div>
                
            
                  </div>
                 
                </div>
              </div> 
         
       </div>
       </>
    )}

    return (
            <Dashboard className="content-wrapper">
               
                { saving() }
                
            </Dashboard>
        )
    }