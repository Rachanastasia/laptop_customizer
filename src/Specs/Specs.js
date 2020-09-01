
import React from 'react';
import Options from '../Options/Options'

import './Specs.css'



export default function Specs(props){
  
    return Object.keys({...props.features}).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
  

        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
             <Options 
                features= {props.features}
                name={feature}
                selected={props.selected}
                update={props.update}
            />
          </fieldset>
        );
   });
  

}