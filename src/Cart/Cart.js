import React from 'react';
import Price from './Price/Price'


export default class Cart extends React.Component{
    constructor(...props){
        super(...props);
    }

    const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );
    return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
    render(){
return(
    
    <section className="main__summary">
            <h2>Your cart</h2>
            {props.summary}
            <div className="summary__total">
              <div className="summary__total__label">
                  <Price />
              </div>
              
            </div>
          </section>
)}
}