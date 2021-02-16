import React from 'react'
import ReactGA from 'react-ga';

const AppTwo = () => {
	const sendEvent = () => {
		ReactGA.event({
			category: 'GTM button2 Clicked',
			action: 'Clicked the button from second page'
		});
		console.log('GTM Tracked Second Page');
		
	}
	return (
		<div>
			<p>Second Page</p>
			<br />
			<button className={'button'} onClick={sendEvent}>Click me to send info to GTM</button>
		</div>
	)
}

export default AppTwo
