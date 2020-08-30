import React from 'react';




export default function Price (props){
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      console.log(USCurrencyFormat)



      //should return the jsx for the price not in parenthesis
}