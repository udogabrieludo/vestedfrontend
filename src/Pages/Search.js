import React,{useState, useLayoutEffect} from 'react'
import {GetCategories, Lists} from './ApiCore'
import {Link} from  'react-router-dom'
import NumberFormat from 'react-number-format';
import ShowProductImage from './ShowProductImage';
import { BounceLoader, BeatLoader, BarLoader} from 'react-spinners'

const Search = () => {

    const [data, setData] = useState({
        categories: [],
        category: '',
        search:"",
        results: [],
        searched: false,
        loading:false,
    })

    const {categories, category,search,searched,results, loading} = data

    const loadCategories = () =>{
        GetCategories().then((data)=>{
          if(data.error){
           console.log('data',data.error)
          }else{
              setData({...data, categories: data})
          }
      })
    }


    useLayoutEffect(() => {
        loadCategories()
    }, [])

     const searchData = ()=>{
         console.log(search, category)
         setData({...data, loading:true})
        if(search){
            Lists({search: search || undefined , category:category}).then((response)=>{
                if(response.error){
                  console.log(response.error)
                }else{
                    setData({...data, results: response, searched:true, loading:false})
                }
            })
        }
     }
    const submitData = (e) =>{
          e.preventDefault()
          searchData()
    }

    const handleChange = (name)=> event =>{
          setData({...data, [name]: event.target.value, searched: false})
    }


    const searchMessage = (searched, results) =>{
         if(searched && results.length > 0){
            return ''
         }
         if(searched && results.length < 1){
            return ` No Investment plan matches ${search}`
         }
    }


     const searchProduct = (results=[]) =>(
       
        <div className="container-fluid">
        <div className="row">
         <div className="col-md-12">
         <h6 className="mb-4 text-muted text-center">
         { searchMessage(searched, results)}
        </h6>
         </div>

            
       
         
        { results && results.map((product, i)=>(
      
        <div className=" col-sm-6 col-md-4 mycard " key={i}>
            <Link to={`/dashboard/invest/${product._id}`} >
            <div className="card"   >
          <ShowProductImage  item={product} url="products"/>
            <div className="px-3">
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
           
     )


     


    const searchForm = ()=> (
        <form onSubmit={submitData}>
        <div id="custom-search-input">
                
                  <div className="container-fluid">
                      <div className="row">
                      <div className="col-3 px-0">
                             <select  onChange={handleChange('category')} className="selectForm" >
                                 <option value="All">
                                   All Investment
                                 </option>
                                 { categories && categories.map((cat, i)=>(
                                     <option key={i} value={cat._id}>{cat.name}</option>
                                 ))}
                             </select>
                             </div>
                            
                            <div className="input-group col-md-9 px-0">
                                <input type="text" className="  search-query form-control" onChange={handleChange('search')} placeholder="Search Investment" />
                                <span className="input-group-btn">
                            <button>
                                  <span className="fas fa-search"></span>
                             </button>
                               </span>
                          </div>
                    </div>      
                  </div>
                             
                
            </div>
            </form>
    )

    return (
        <div>
            {searchForm()}
            {searchProduct(results)}
           {/*  {JSON.stringify(results)}*/}
        </div>
    )
}

export default Search
