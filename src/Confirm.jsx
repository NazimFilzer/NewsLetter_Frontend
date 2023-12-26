import './App.css'
import ConfirmImg from './assets/images/icon-list.svg'

// eslint-disable-next-line react/prop-types
const Confirm = ({ input }) => {
    return (
        <div id='confimation-container'>
            <img src={ConfirmImg} alt="" />
            <h1>Thanks for Subscribing! </h1>
            <p>A confimation mail has been sent to <span>{input}</span>. Please open it and click the button inside to confirm your subscrition</p>
            <button>Dismiss Message</button>
        </div>
    );
}

export default Confirm;