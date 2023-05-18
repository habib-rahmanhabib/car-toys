import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className='container mx-auto rounded-lg py-2 bg-green-900'>

                <form className="form-control w-full max-w-xs mx-auto shadow-lg p-5 rounded-lg bg-purple-200">

                    <label className="label">
                        <span className="label-text font-bold">Provide Your Email</span>

                    </label>
                    <input type="email" name='email' placeholder="Type Email" required className="input input-bordered w-full max-w-xs" />

                    <label className="label">
                        <span className="label-text font-bold">Provide Your Password?</span>

                    </label>
                    <input type="password" name='password' placeholder="Type Password" required className="input input-bordered w-full max-w-xs" />


                    <button className='btn btn-accent mt-2' type='submit'>Login</button>

                    <p> have an account <span> <Link className='link link-primary' to="/register">Registration</Link></span></p>
                    <div className="mx-auto">
                        <p className='btn btn-error  py-2 mt-2 mx-auto text-center'>
                             Google
                        </p> <p className='btn bg-black mt-2 mx-auto text-center'>

                       
                             GitHub
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Login;