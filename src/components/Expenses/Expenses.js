import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2023');
	const addExpenseFilter = (year) => {
		setFilteredYear(year);
	};

	const filteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpenseFilter
					selected={filteredYear}
					onAddExpenseFilter={addExpenseFilter}
				/>
				<ExpenseChart expenses={filteredExpense}/>
				<ExpenseList items={filteredExpense}/>
			</Card>
		</div>
	);
};

export default Expenses;
