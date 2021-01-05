import React,{useState, useLayoutEffect, Fragment} from 'react'

const RadioBox = ({prices, handleFilters}) => {

  const [value, setValues] = useState(0);

  const handleChange =(event)=>{
    handleFilters(event.target.value);
    setValues(event.target.value)
    console.log( 'values', value)
  }

    return (
        <Fragment>
            { prices && prices.map((p, i)=>(
                <div key={i}>
                    <input  type="radio" name={p} onChange={handleChange} value={`${p._id}`}/>
            <label className="ml-2">{p.name}</label>
                </div>
            ))}
            
        </Fragment>
    )
}

export default RadioBox
