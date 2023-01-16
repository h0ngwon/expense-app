import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

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
				{filteredExpense.length === 0 && (
					<p>항목이 존재하지 않습니다.</p>
				)}
				{filteredExpense.length > 0 &&
					filteredExpense.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))}
			</Card>
		</div>
	);
};

export default Expenses;
