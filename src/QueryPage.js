import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export default function QueryPage() {
    useQuery('pastires',()=>{
        axios.get('http://localhost:4000/doughnuts')
    })
  return (
    <div>QueryPage</div>
  )
}
