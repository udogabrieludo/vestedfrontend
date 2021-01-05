import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Tabs = ({categories, handleFilters}) => {

    const [tabs , setTabs] = useState([])


    const handleToggle = cat => () =>{
      //indexOf return the first element of array or -1
       const currentCategoryId = tabs.indexOf(cat) 
       const newCategoryId =  []
       if(currentCategoryId === -1){
        newCategoryId.push(cat)
       }else{
       // newCategoryId.splice(currentCategoryId, 1)
      
       }
       console.log(newCategoryId)
       setTabs(newCategoryId);
       handleFilters(newCategoryId);
    }


  const [values, setValues] = useState(0);

  const handleChange =(event)=>{
    handleFilters(event.target.value);
    setValues(event.target.value)
  }

    return (
        <>
               <nav className="tabbable">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    { categories && categories.map(( cat, i ) =>(  
                            <Link className="nav-item nav-link " onClick={handleToggle(cat._id)}  key={i}  id={`${cat.name}`} data-toggle="tab" to={`#${cat.name}`} role="tab" aria-controls={`${cat.name}`} aria-selected="true">{cat.name}</Link>      
                    ))}
                 </div>
                </nav>
                { categories && categories.map((cat, i)=>(
               <div className="tab-content pt-2" id="nav-tabContent" key={i}>
           
                        <div className="tab-pane fade show active"   id={`${cat.name}`} role="tabpanel" aria-labelledby="nav-home-tab">
                           <div className="container">
                            <div className="row">
                                  <div className=" col-sm-6 col-md-3 ">
                                      <div className="card">
                                      <img className="img-fluid imgz" src="/images/2.jpg"  alt="" /> 
                                        <div className="px-3">
                                          <h6>Grain farm Investment</h6>
                                           <p className="mb-1" style={{color:"rgb(146 144 144)",fontSize:".8rem",  fontWeight:"500"}}><span style={{color:"#087d42", fontSize:"1.2rem", fontWeight:"600"}}>28%</span> returns in 6 months</p>
                                            <div className="row">
                                            <div className="col-md-6">
                                              <h5 style={{color:"#b54808"}}>₦150,000</h5>
                                            </div>
                                            <div className="col-md-6">
                                            <button type='button' className="btn py-2 px-3 mt-0 bvn"
                                                style={{backgroundColor:"rgb(6 77 123)", fontWeight:"500",
                                                    fontSize:".7rem"}}>View
                                            </button>
                                            </div>
                                          </div>
                                        </div>
                                     </div>   
                                  </div>    
                            </div>
                         </div>      
                        </div>
           
                    </div>
                    ))}


              </> 
           )
     

            }

export default Tabs
