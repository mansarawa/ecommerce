
import Account from '../layout css/account.module.css'
export default function Profile() {

	const user = JSON.parse(localStorage.getItem('user'))
	const username = user.name.charAt(0).toUpperCase() + user.name.slice(1);


	return (
		<div className={Account.container}>
			<h1>Hello {username}</h1>
			<h2 className={Account.headingtwo} >Your Activity</h2>
			<div className={Account.activity}>
			
				<div className={Account.item}>
					<h2>6</h2>
					<h2>Pending</h2>
				</div>
				<div className={Account.item}>
					<h2>5</h2>
					<h2>Cancel</h2>
				</div>
				<div className={Account.item}>
					<h2>1</h2>
					<h2>Completed</h2>
				</div>
				<div className={Account.item}>
					<h2>7</h2>
					<h2>Total Order</h2>
				</div>
			</div>

		</div>
	);
};