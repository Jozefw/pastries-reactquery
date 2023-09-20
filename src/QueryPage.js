import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const dataFetching =()=>{
    return axios.get('http://localhost:4000/doughnuts1')
}

export default function QueryPage() {
    const {isLoading,data,isError,error} = useQuery('pastries',dataFetching);

    if(isLoading){
        return(
            <h1>Page is loading...</h1>
        )
    }
    // for error handling in error


    if(isError){
        return(
            <h1>{error.message}</h1>
        )
    }
  return (
   <>
   <h1>Pasty List</h1>
   {
   data?.data.map((item)=>{
    return <div key={item.id}>{item.name}</div>
   })
   }
   </>
  )
}
