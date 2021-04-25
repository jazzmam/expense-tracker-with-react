import './App.css';
import ErrorMessage from './ErrorMessage';
import BalanceContainer from './BalanceContainer';
import CurrencyContainer from './CurrencyContainer';
import IncomeExpensesContainer from './IncomeExpensesContainer';
import ExpenseInput from './ExpenseInput';
import AmountInput from './AmountInput';
import AddButton from './AddButton';



export default function App() {
    const appTitle: string = "Expense Tracker";

    return (
      <div className="App">
        <ErrorMessage id="error-message" className="error-message"/>
        <div>
          <h1>{appTitle}</h1>
          <BalanceContainer id="balance-container" className="balance-container"/>
          <CurrencyContainer className="currency-container"/>
          <IncomeExpensesContainer />
        </div>
        <form>
          <ExpenseInput />
          <AmountInput />
        </form>
          <AddButton content="Add expense"/>
          <div id="list"></div>
      </div>
    );
  }