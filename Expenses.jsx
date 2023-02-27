import './Expenses.css'
import React from 'react';
import ExpenseItem from "./Expenseitem";
import Card from '../UI/card';
function Expenses(props){
    return(
        <Card className='expenses'> 
        <ExpenseItem
          date={props.item[0].date}
          title={props.item[0].title}
          amount={props.item[0].amount}
        />
        <ExpenseItem
          date={props.item[1].date}
          title={props.item[1].title} 
          amount={props.item[1].amount}
        />
        <ExpenseItem
          date={props.item[2].date}
          title={props.item[2].title}
          amount={props.item[2].amount}
        />
        </Card>
    );
}
export default Expenses;