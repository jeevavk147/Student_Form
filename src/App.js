import { Form } from './component/form';
import './App.css'
import { List } from './component/list';
import { useEffect, useRef, useState } from 'react';
import { read } from './component/useFireStore';

function App() {

  const [detailsList,setDetailsList]=useState([])
  const [details,setDetails]=useState({
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

  useEffect(()=>{
    read((data) => {
        setDetailsList(data);
      });   
},[details])

    const formRef = useRef(null);
  
    const scrollToForm = (detail) => {
      setDetails(detail)
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
  return  <>
     <div ref={formRef}>
         <Form props={details}/>
      </div>
      <div className="container mt-14 justify-items-center mx-auto">
      {detailsList.length>0 && <h1 className='font-bold px-2 rounded-2xl bg-green-800 font-serif text-3xl'>Student Details</h1>}
      {detailsList.map((detail,index)=>{return <List scrollToForm={scrollToForm} detail={detail} key={index}/>})}
      </div>
      
  </>
}

export default App;
