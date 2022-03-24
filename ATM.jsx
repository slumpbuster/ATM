const ATMDeposit = ({ onChange, isDeposit, deposit }) => {
  return (
    <label className="label huge">      
      <input id="amount" type="number" width="200" onChange={onChange}></input>
      <input id="submit" type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [deposit, setDeposit] = React.useState(0);
  const [error, setError] = React.useState('of $0');
  const choice = ["Deposit", "Cash Back"];

  let status = `Account Balance $ ${totalState} `;
  const handleChange = (e) => {
    let disable = false;
    let transactionType = (document.getElementById('transaction').value === 'true');
    let transaction = Number(document.getElementById('amount').value);
    let tempError = `of $${transaction}`;
    if ((transactionType ? totalState + transaction : totalState - transaction) < 0) {
      tempError += ` would leave you negative`;
      disable = true;
    } else {
      setDeposit(Number(transaction));
    }
    setError(tempError);
    document.getElementById('submit').disabled = disable;
    setIsDeposit(transactionType);
  };
  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    document.getElementById('amount').value = '';
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <h3>{`${choice[Number(!isDeposit)]} ${error}`}</h3>
      <select id="transaction" onChange={handleChange}>
        <option value="true">Deposit</option>
        <option value="false">Withdrawal</option>
      </select>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
