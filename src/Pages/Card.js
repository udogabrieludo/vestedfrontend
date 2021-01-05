import React, {useState} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const Card = ({categories, handlefilter}) => {
     
    const [tabIndex, setTabIndex] = useState(0);
    const [checked, setCheked] = useState([])
    const [value, setValue] = useState(0)
   
    const handleChange = cat => () =>{
        const currentCategory = checked.indexOf(cat)
        const newCheckedCategory = []

        if(currentCategory){
            newCheckedCategory.push(cat)
        }else{
            newCheckedCategory.splice(currentCategory, 1)
        }
        
     // console.log('Categories', newCheckedCategory)
        setCheked(newCheckedCategory)
        handlefilter(newCheckedCategory)
    }


    const newHandleChange = (event) =>{
        handlefilter(event.target.value)
        setValue(event.target.value)
    }

    return (
        <div>
              <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} >
                            <TabList>
                            { categories && categories.map((cat, i)=>(
                                    <Tab key={i} onClick={newHandleChange} name={cat} value={`${cat._id}`}>{cat.name} </Tab>
                            ))}
                            </TabList>
                            { categories && categories.map((cat, i)=>(
                            <TabPanel key={i}> {cat.name} {cat._id}
                            </TabPanel>  ))}
                           
                       </Tabs>
            

                       <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)} >
                            <TabList>
                            { categories && categories.map((cat, i)=>(
                                    <Tab key={i} value={ checked.indexOf(cat._id ===-1)} onClick={handleChange(cat._id)}>{cat.name} </Tab>
                            ))}
                            </TabList>
                            { categories && categories.map((cat, i)=>(
                            <TabPanel key={i}> {cat.name} {cat._id}
                            </TabPanel>  ))}
                           
                       </Tabs>
                       <ul>
                           {categories && categories.map((cat, i)=>(
                               <li key={i}>
                               <input type="checkbox" value={ checked.indexOf(cat._id === -1)} onChange={handleChange(cat._id)}/>
                               <label className="ml-1">{ cat.name}</label>
                              </li>
                           ))}
                       </ul>
            
        </div>
    )
}

export default Card
