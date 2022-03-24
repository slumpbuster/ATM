const ATMDeposit = ({ onChange, isDeposit, deposit, isValid }) => {
  return (
    <label className="label huge">      
      <input id="amount" type="number" width="200" onChange={onChange}></input>
      <input id="submit" disabled={!isValid} type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const Account = () => {
  const { useState, useEffect } = React;
  const [totalState, setTotalState] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [deposit, setDeposit] = useState(0);
  const [atmMode, setatmMode] = useState('');
  const [validTransaction, setValidTransaction] = useState(false);
  const [msg, setMsg] = useState('Select transaction type to continue');
  const choice = ["", "Deposit", "Withdrawal"];

  let status = `Account Balance $ ${totalState} `;
  const handleChange = (e) => {
    let amount = Number(event.target.value);
    let valid = true;
    if (amount <= 0) valid = false;
    if ((atmMode === 'Withdrawal') && (amount > totalState)) valid = false;
    message(atmMode, amount, totalState);
    setValidTransaction(valid);
    if (valid || amount === 0) setDeposit(amount);
  };
  const handleSubmit = () => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    document.getElementById('amount').value = '';
    event.preventDefault();
  };
  const handleModeSelect = (event) => {
    let transactionType = event.target.value;
    message(transactionType, deposit, totalState);
    setatmMode(transactionType);
    setIsDeposit(transactionType === "Deposit");
  };
  const message = (mode, amount, total) =>
  {
    let tempMsg = `${mode}`;
    if (tempMsg.length === 0) {
      tempMsg = 'Select transaction type to continue';
    } else {
      tempMsg += ` $${amount}`;
      if ((mode === 'Withdrawal') && (amount > total)) {
        tempMsg += ` would leave you negative`;
      }
    }
    setMsg(tempMsg);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <h4>{`${msg}`}</h4>
      <select id="transaction" onChange={(e) => handleModeSelect(e)}>
        <option id="none" value=""></option>
        <option id="deposit" value="Deposit">Deposit</option>
        <option id="withdrawal" value="Withdrawal">Withdrawal</option>
      </select>
      {atmMode && (
        <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}></ATMDeposit>
      )}
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
