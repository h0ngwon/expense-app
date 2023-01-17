import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
    if(props.items.length === 0 ) {
        return <h2 className='expenses-list__fallback'>항목이 존재하지 않습니다.</h2>
    }

	return (
		<ul className='expenses-list'>
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpenseList;
