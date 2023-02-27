import React from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/card'
function ExpenseItem(props) {

  const clickHandler = () =>{
    alert ("Clicked")
  }
 
  return(
<Card className="expense-item">

    <div className="expense-item__description">
        <h2>{props.title}</h2>
    </div>
    <ExpenseDate  date = {props.date}/>
    <div className="expense-item__price">{props.amount}</div>
    <button onClick={ clickHandler}>Change Title</button>
  </Card>
  );
}
export default ExpenseItem;
