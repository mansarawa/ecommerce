import ClickAwayListener from 'react-click-away-listener';

export default function Profile  ()  {
	const handleClickAway = () => {
		console.log('Maybe close the popup');
	};

	return (
		<div id="app">
			<ClickAwayListener onClickAway={handleClickAway}>
				<div> Triggers whenever a click event is registered outside this div element </div>
			</ClickAwayListener>
		</div>
	);
};