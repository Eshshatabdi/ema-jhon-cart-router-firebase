import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="" />
                        </div>
                        <input className='form-submit' type="submit" value="login" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to='/signup'>Create an acount</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;