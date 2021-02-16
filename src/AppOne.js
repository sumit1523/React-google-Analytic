import React from 'react'
import ReactGA from 'react-ga';

const AppOne = () => {

    const sendEvent = () => {
        ReactGA.event({
            category: 'GTM button1 Clicked',
            action: 'Clicked the button from first page'
        });
		console.log('GTM Tracked First Page');

    }

    return (
        <div>
            <p>First Page</p>
            <br />
            <button className={'button'} onClick={sendEvent}>Click me to send info to GTM</button>
        </div>
    )
}

export default AppOne
