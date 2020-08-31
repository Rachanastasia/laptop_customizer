
import React from 'react';

import slugify from 'slugify';
import FormatCurrency from '../FormatCurrency/FormatCurrency';




export default function Options(props) {

  

   const feature = props.features;
   const name = props.name;

   const arr = feature[name];


   const options = arr.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      
    
      return (
         <div key={itemHash} className="feature__item">
            <input
               type="radio"
               id={itemHash}
               className="feature__option"
               name={slugify(item.name)}
               checked={item.name === props.selected[name].name}
               onChange={e => props.update(name, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
               {item.name}
               <FormatCurrency price={item.price} />
            </label>
         </div>
      );
   })

   return (
      <fieldset className="feature" >
         <legend className="feature__name">
         </legend>
         {options}
      </fieldset>
   )
}