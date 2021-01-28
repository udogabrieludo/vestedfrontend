import React, {useState, useLayoutEffect, useEffect} from 'react'
import Dashboard from './Dashboard'
import {Link} from  'react-router-dom'
 import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'
 import { GetProducts} from './ApiCore'

 import NumberFormat from 'react-number-format';
 import Loader from '../FullPageLoader/Loader';
import ShowProductImage from './ShowProductImage';
import Search from './Search'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SearchProducts from './SearchProducts'


 

const InvestmentShop = () => {

    const [values, setValues] = useState({
        categories:[],
        loading: false,
        error: '',
        active: 0,
        products: []
    });


    const [search, setSearch] = useState('')
    const { categories, loading, error, products, } = values;


    const [filterProducts, setFilterProducts] = useState([])



 




  
  const lifeCycle = () =>{
    setValues({...values, loading:true})

    GetProducts('createdAt').then(data =>{ 
        if(data.error){
            setValues({...values, error: data.error, loading:false})
        }else{
            setValues({...values, products: data, loading:false, formData: new FormData() })
        }
    })
  }


 

   
    const showLoading = () =>(
      loading && (<Loader />
      )
   )
    
   useLayoutEffect(() => {
 
    lifeCycle()

   
   }, [])

     
   useLayoutEffect(()=>{
    setFilterProducts(products && products.filter((product)=> {
      
     return   product.name.toLowerCase().includes(search.toLowerCase()) 
    
    }
   
        
     ))
   }, [products, search])
    

   const invest = () =>(
       
         <HelmetProvider>
          <Helmet>
          <title>VestedMoney | Investment</title> 
          </Helmet>
        
         
          {showLoading()}
           <div className="container">
              <div className="row">
               <div className="col-md-12 mt-3" style={{ fontFamily : "poppins"}}>
                 <h3 style={{textTransform:"capitalize"}} className="pb-4">Investment</h3>  
                     
                </div>
                
              </div> 
              <div className="row">
               
                  <div className="col-md-8 ">
                 
                     <SearchProducts  setSearch={setSearch} search={search}/>
                       <div className="card">
                         <div className="card-body">  
                         <div className="container">
                            <div className="row">
                            { filterProducts && filterProducts.map((product, i)=>(
                          
                            <div className=" col-6 col-md-4 mycard " key={i}>
                                <Link to={`/dashboard/invest/${product._id}`}>
                                <div className="card"   >
                              <ShowProductImage  item={product} url="products"/>
                                <div className="px-md-3">
                                    <h6>{product.name}</h6>
                                 
                                   <NumberFormat  decimalScale={2} value={product.roi * 100/product.price} displayType={'text'} 
                   
                                  suffix={'%'} renderText={value => <div className="mb-1 roi" ><span style={{color:"#087d42", 
                                  fontSize:"1rem", fontWeight:"600"}}>{value}</span> returns in {product.duration} months </div>} />   
                                 
                                    <div className="row">
                                    <div className="col-md-12">
                                      <h5 style={{color:"rgb(31 32 33)", fontWeight:'700'}}><NumberFormat value={product.price}
                                    displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <div>{value}</div>} /></h5>
                                    </div>
                                  
                                  </div>
                                </div>
                             </div> 
                                </Link>
                            </div> 
                         
                        ))}
                       
                                     
                            </div>
                         </div> 

         
                         </div>
                       </div>
                  </div>
                  <div className="col-md-4 ">
                   
                    <div className=" alert alert-info alert-dismissible fade show pl-0" role="alert" style={{
                       borderRadius:".5rem", background:"linear-gradient(45deg, #112586, #15b2d6f2)",
                       color: "#fff"
                   }}>   
                        <div className="px-3">
                               <i className="fa fa-check-circle-o pull-right" style={{fontSize: "1.5rem",
                        marginRight: "-4rem"}}></i>
                             <div className="bvnText">START INVESTING IN VERIFIED OPPORTUNITIES </div>         
                        </div>                      
                    </div>
                    <div className="" style={{ borderRadius:".5rem"}}>
                        <div className="px-3">
                             <div><img  src="/images/finance.png" className="img-fluid"/></div> 
                             
                        </div>                      
                    </div>
                  </div>
                 
              </div>  
      
            </div>
        
            </HelmetProvider>

   )

    return (
        <Dashboard  className="content-wrapper" title="| Dashboard">
                   {invest()}
                
       </Dashboard>
    )
}

export default InvestmentShop
