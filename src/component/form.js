import { useEffect, useState } from 'react';
import { create, updatedoc } from './useFireStore';

export function Form({props})
{

  useEffect(()=>{
    setDetails(props)
   },[props]
    )
    const [details,setDetails]=useState({})
    
      function handlechange(e)
      {
        const name=e.target.name
        const value=e.target.value
        const checked=e.target.checked
        if(value==='indian')
        {
          setDetails((previous)=>{
            return {...previous,[value]:checked}
          })
        }
        else{
          setDetails((previous)=>{
            return {...previous,[name]:value}
          })
        }
      }

      function handlereset()
      {
        setDetails({
          name:'',
          age:0,
          dob:'',
          email:'',
          gender:'',
          qualification:'',
          indian:false,
          // color:'',
          // photo:'',
          rate:4
        })
      }
    
      function handlesubmit(e)
      {
        e.preventDefault()
        if(details.id)
        {
          updatedoc(details.id,details)
        }
        else{
          create(details)
        }
        
        setDetails({
          name:'',
          age:0,
          dob:'',
          email:'',
          gender:'',
          qualification:'',
          indian:false,
          // color:'',
          // photo:'',
          rate:4
        })
      }
    
    return (
        <div className='container justify-items-center mx-auto mt-5'>
      <h1 className='font-bold px-2 rounded-2xl bg-green-800 font-serif text-3xl'>Enter Student Details</h1>
      <form onSubmit={handlesubmit} className='bg-gray-200 shadow-black hover:shadow-2xl p-4 flex flex-col gap-4 mt-5 bg-grey-400 rounded-3xl'>
      <label>Enter Name: <input type='text'name='name' value={details.name} onChange={handlechange} className='input' /></label>
      <label>Enter Age: <input type='number' name='age' value={details.age} onChange={handlechange}  className='input' /></label>
      <label>Enter DOB: <input type="date" name='dob' value={details.dob} onChange={handlechange}  className='input' /></label>
      <label>Enter Email: <input type="email" name='email' value={details.email} onChange={handlechange} className='input' /></label>

      <label>
        Gender:
        <label> <input type='radio' onChange={handlechange} value='Male' name='gender' checked={details.gender==='Male'} /> Male</label>
        <label> <input type='radio' onChange={handlechange} name='gender' value='Female' checked={details.gender==='Female'}/> Female</label>
        <label> <input type='radio' onChange={handlechange} name='gender' value='Other' checked={details.gender==='Other'}/> Other's</label>
      </label>

      <label>Highest Qualification: 
      <select className='input' name='qualification' value={details.qualification} onChange={handlechange}>
       <option>select</option>
        <option>SSLC</option>
        <option>HSC</option>
        <option>Bachelor's Degree</option>
        <option>Master's Degree</option>
        <option>Other's</option>
      </select>
      </label>
      <label>Indian: <input value='indian' checked={details.indian} type="checkbox" onChange={handlechange} /></label>
      {/* <label>Fav Color: <input name='color' type="color" value={details.color} onChange={handlechange}/></label>
      <label>Submit Photo: <input name='photo'   className='input' type="file" onChange={handlechange}/></label> */}
      <label>Rate Us <input type="range" name='rate' value={details.rate} min={1} max={10} onChange={handlechange}/></label>
      <div className=' text-center'>
      <button type="submit" className='button' >Submit</button>
      </div>
      <div className=' text-center'>
      <button  type="reset" className='button' onClick={handlereset}>Reset</button>
      </div>
      </form>
    </div>
    )
}