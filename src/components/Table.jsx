const Formatter = new Intl.NumberFormat('en-US',{
  style:'currency',
  currency : 'INR',
  minimumFractionDigits : 2,
  maximumFractionDigits : 2,
});

const Table = (props) =>{
    return (
        <>
         <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Invested Capital</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            
            <th>Total Savings</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) => (
            <tr key = {yearData.year}>
            <td>{yearData.year}</td>
            <td>{Formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
            <td>{Formatter.format(yearData.yearlyInterest)}</td>
            <td>{Formatter.format(yearData.savingsEndOfYear - props.initialInvestment - yearData.yearlyContribution * yearData.year)}</td>
            
            <td>{Formatter.format(yearData.savingsEndOfYear)}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
        </>
    )
}

export default Table