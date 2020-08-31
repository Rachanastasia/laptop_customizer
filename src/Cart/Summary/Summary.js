import React from 'react';
import FormatCurrency from '../../FormatCurrency/FormatCurrency';

import './Summary.css'

export default function Summary(props){


   const mapped = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          <FormatCurrency cost={selectedOption.cost} />
        </div>
      </div>
    );
  });
return mapped;

}