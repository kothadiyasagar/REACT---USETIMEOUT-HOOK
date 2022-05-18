import { useEffect, useState } from "react"

   
   
   export  const Settimeout =(delay:number)=>{

     const [ready , setready]=useState(false)

     useEffect(()=>{
        let timer = setTimeout(() => setready(true), delay);

    return () => clearTimeout(timer);
     },[])

     return ready

    }