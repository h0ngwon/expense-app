import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>품목</label>
					<input type='text' />
				</div>
				<div className='new-expense__control'>
					<label>금액</label>
					<input type='number' min='1' />
				</div>
				<div className='new-expense__control'>
					<label>날짜</label>
					<input type='date' min='2000-01-01' max='2100-12-31' />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>추가하기</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
