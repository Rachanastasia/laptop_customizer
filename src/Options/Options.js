
import React from 'react';

import slugify from 'slugify';
import FormatCurrency from '../FormatCurrency/FormatCurrency';




export default function Options(props) {
   
   const selected = props.selected;
   const feature = props.feature;
  

   const options = feature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
         <div key={itemHash} className="feature__item">
            <input
               type="radio"
               id={itemHash}
               className="feature__option"
               name={slugify(item)}
               checked={item.name === selected[feature].name}
               onChange={e => this.updateFeature(feature, item)}
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
            <h3>{feature}</h3>
         </legend>
         {options}
      </fieldset>
   )
}