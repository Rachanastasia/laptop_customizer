
import React from 'react';
import Options from '../Options/Options'



export default function Features(props){
    
    const propFeatures = props.features;
    const features = Object.keys(propFeatures).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        
    
       
  
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            <Options feature="this.feature" selected="this.props.store"/>
          </fieldset>
        );
   });


return(

<form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
)


}