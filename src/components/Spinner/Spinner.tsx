import './Spinner.scss';

export const Spinner = (): JSX.Element => {
	return (
		<div className='spinner-wrapper'>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
