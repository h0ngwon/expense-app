import Expenses from './components/Expenses/Expenses';

const App = () => {
	const expenses = [
		{
			id: 'e1',
			title: '화장지',
			amount: 10000,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'TV',
			amount: 790000,
			date: new Date(2021, 2, 12),
		},
		{
			id: 'e3',
			title: '차 보험',
			amount: 300000,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: '책상',
			amount: 500000,
			date: new Date(2021, 5, 12),
		},
	];

	return (
		<div>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
