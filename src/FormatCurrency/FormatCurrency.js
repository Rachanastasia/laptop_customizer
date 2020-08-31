




export default function FormatCurrency(props) {

  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(props.cost);
  



  return USCurrencyFormat;




}