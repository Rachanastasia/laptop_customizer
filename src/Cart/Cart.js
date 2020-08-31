import React from 'react';
import FormatCurrency from '../FormatCurrency/FormatCurrency'

import Summary from './Summary/Summary'


export default function Cart(props){


return (
  <section className="main__summary">
            <h2>Your cart</h2>
            <Summary />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <FormatCurrency total={100} />
              </div>
            </div>
          </section>
)

}