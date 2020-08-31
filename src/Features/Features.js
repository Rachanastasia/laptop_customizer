
import React from 'react';
import Options from '../Options/Options'



export default function Features(props){
   const featureProps ={...props.features}
   console.log(featureProps)
    const newFeatures = Object.keys({...props.features}).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        console.log(props.selected)
    const name = feature;

        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
             <Options 
                features= {props.features}
                name={name}
                selected={props.selected}
                update={props.update}
            />
          </fieldset>
        );
   });


return(

<form className="main__form">
            <h2>Customize your laptop</h2>
            {newFeatures}
          </form>
)


}