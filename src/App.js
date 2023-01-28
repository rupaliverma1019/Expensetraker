import './App.css'
import ExpenseItem from './component/expensetracker/ExpenseItem';
function App(){
let expenseDate = new Date(2021,3,28);
let expenseTitle = "School fee";
let expenseAmount = 300;

  return (
    <div>
      <h1></h1>
  <ExpenseItem 
  date={expenseDate} 
  title={expenseTitle}
  amount={expenseAmount} >

  </ExpenseItem>
  </div>
  );
}
export default App;