import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
  const [data,setData]=useState({});
  useEffect(()=>{
     fetch(`https://v6.exchangerate-api.com/v6/c0215ff0019f716d4b31875c/latest/${currency}`)
     .then((res)=> res.json())
     .then((res)=>setData(res.conversion_rates))
  },[currency])
  
  

  return data
}
export default useCurrencyInfo