import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function QueryPage() {
    const {isLoading,data} = useQuery('pastries',()=>{
        return axios.get('http://localhost:4000/doughnuts')
    });

    if(isLoading){
        return(
            <h1>Page is loading...</h1>
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
