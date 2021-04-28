import React from 'react';
import './App.css';
import ErrorMessage from './ErrorMessage';
import BalanceContainer from './BalanceContainer';
import CurrencyContainer from './CurrencyContainer';
import IncomeExpensesContainer from './IncomeExpensesContainer';
import ExpenseAmountInputContainer from './ExpenseAmountInputContainer';
import AddButton from './AddButton';
import { useState } from 'react';


export default function App() {
    const appTitle: string = "Expense Tracker";

    const [Expense, setExpense] = useState<number>(0);
    const [Amount, setAmount] = useState<number>(0);
    const [TotalAmount, setTotalAmount] = useState<number>(0);

    // Add item to list
    const AddItemToList = () => {
      setTotalAmount((prev) => prev + Number(Amount));
  }

    return (
      <div className="App">
        <ErrorMessage id="error-message" className="error-message"/>
        <div>
          <h1>{appTitle}</h1>
          <BalanceContainer id="balance-container" className="balance-container"/>
          <CurrencyContainer className="currency-container"/>
          <IncomeExpensesContainer totalExpenses={TotalAmount} />
        </div>
        <ExpenseAmountInputContainer 
          onExpenseChange={setExpense} 
          onAmountChange={setAmount} 
        />
        <AddButton content="Add expense" onClick={AddItemToList} />
        <div id="list">aa</div>
      </div>
    );
}