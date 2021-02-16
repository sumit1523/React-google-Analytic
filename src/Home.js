import React from 'react'
import ReactGA from 'react-ga';

const Home = () => {

    const sendEvent = () => {
        ReactGA.event({
            category: 'GTM button Clicked',
            action: 'Clicked the button from Home page'
        });
		console.log('GTM Tracked Home Page');
    }

    return (
        <div>
            <p>Home Page</p>
            <br />
            <button className={'button'} onClick={sendEvent}>Click me to send info to GTM</button>
        </div>
    )
}

export default Home
