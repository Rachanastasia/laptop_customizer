import React from 'react';
import FormatCurrency from '../../FormatCurrency/FormatCurrency';

import './Total.css'

export default function Total(props){
 console.log(props.selected)
  const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );
      console.log(total);
    return(
      <FormatCurrency cost={total}/>
    )


    
}