import HeroImg from './assets/images/illustration-sign-up-mobile.svg'
import { useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Form = ({ input, handleSubmit, cssClass, error }) => {
    const inputRef = useRef();
    const handleClick = () => {
        handleSubmit(inputRef.current.value);
    };
    return (
        <div className='container'>
            <img src={HeroImg} alt="HeroImg" />
            <div className="content">
                <h1>Stay updated!</h1>
                <p className='para'>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <p className={`inputs ${cssClass}`}>
                    <p className="validation">
                        <label htmlFor="">Email Address</label>
                        {error && <span className='error'>Valid email required</span>}
                    </p>
                    <input type='email' placeholder='email@company.com' ref={inputRef} />
                </p>


                <button
                    onClick={handleClick}
                    value={input}
                >
                    Subscribe to monthly newsletter
                </button>
            </div>

        </div>
    );
};

Form.displayName = 'Form';

export default Form;