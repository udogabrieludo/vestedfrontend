import React, {useState, useEffect, useLayoutEffect} from 'react'
import Dashboard from './Dashboard'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {GetCategories, getFilterProducts} from './ApiCore'
import Loader from '../FullPageLoader/Loader';
import Card from './Card'


export default function Savings() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const [limit , setLimit] = useState(6)
    const [skip , setSkip] = useState(0)
    const [filterResult , setFilterResult] = useState(0)
    const [tabIndex, setTabIndex] = useState(0);
    const [filtermy, setFilter] = useState(0);
     
  
    
    const[myFilter, setMyFilter]  = useState({
        filters:{
          category: [],
          price: []
        },
      })


    const handleFilters = (filter, filterBy) =>{
      //  console.log('categories', filter, filterBy)
      const newFilters = {...myFilter}
      newFilters.filters[filterBy] = filter;

      loadFilterProducts(myFilter.filters)
      setMyFilter(newFilters)
    }
    
      
  

    const init = () =>  {
        setLoading(true);
        GetCategories().then(data =>{
           if(data.error){
            setError(data.error)
            setLoading(false);
           }else{
            setLoading(false);   
            setCategories(data)
           }
        })
       
     }


     const loadFilterProducts = newfilterss =>{
     
        getFilterProducts(skip, limit, newfilterss).then((data)=>{
            if(data.error){
                setError(data.error)
                setLoading(false)
            }else{
              console.log(data);
              setFilter(data)
            }
        })

     }
   

 const filterProducts = (newFilter) =>{
     setLoading(true)
    getFilterProducts(skip, limit, newFilter).then((data)=>{
        if(data.error){
            setError(data.error)
            setLoading(false)
        }else{
          console.log(data);
          setFilter(data.data)
        }
    })
 }

     useLayoutEffect(()=>{
        init();
        filterProducts()
        loadFilterProducts(skip, limit, myFilter.filters)
        
     }, [])

     
    const saving =  () =>{
        return (
           <>
            { loading ? <div className="text-center"><Loader  /></div> :
           <div className="container">
            <div className="row">
               <div className="col-md-12 mt-3" style={{ fontFamily : "poppins"}}>
                 <h3 style={{textTransform:"capitalize"}} className="pb-4">Invest</h3>  
                 <div className="quickaction alert alert-warning alert-dismissible fade show" role="alert" style={{ borderRadius:".5rem"}}>
                        <div className="px-3">
                             <div className="leadText">Your BVN is not connected to your account.</div> 
                             <p>Your BVN helps us protect you from fraudulent transactions. Please add your bvn.</p>
                             <button type="button" className="close"  data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <hr />
                              <button type='button' className="btn py-2 px-3 mt-0 bvn"
                               style={{backgroundColor:"rgb(0 60 128)", fontWeight:"500",
                                fontSize:".7rem"}}>Add Now</button>
                             </div>                     
                         </div>   
                    </div>
              </div> 
           <div className="row">
               <div className="col-md-8">
                   <div className="card">
                       <div className="card-body">
                       <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} >
                            <TabList>
                            { categories && categories.map((cat, i)=>(
                                    <Tab key={i}>{cat.name} </Tab>
                            ))}
                            </TabList>
                            { categories && categories.map((cat, i)=>(
                            <TabPanel key={i}> {cat.name} {cat._id}
                            </TabPanel>  ))}
                           
                       </Tabs>
                       </div>
                    </div>
                           <div>
                            
                            <Card categories={categories} handlefilter={ filters => handleFilters(filters, 'category')}/>
                          
                          </div>
               </div>  
           </div>   
       </div>}
       </>
    )}

    return (
            <Dashboard className="content-wrapper">
               
                { saving() }
                {JSON.stringify(filtermy)}
            </Dashboard>
        )
    }