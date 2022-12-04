import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { authSliceReducer, resetReducer } from "../store/reducers/slice";


export const LoginComponent = () => {

    const {register, handleSubmit } = useForm();

    const dispatch = useDispatch();

    const onReset = () => {
        const load = {
            isLoggedIn: false,
            user: 'N/A',
            token: null
        }
        dispatch(resetReducer(load));
    }

    const submitForm = (data: any) => {
        // come on, just a fake authenticator
        // repo primarily focus on use context
        if (data.userid !== data.password) {
            console.log('Invalid password');
            return;
        }
        const attr: any = {
            isLoggedIn: true,
            user: data.userid,
            token: 'abc'
        };
        dispatch(authSliceReducer({
            isLoggedIn: true,
            user: data.userid,
            token: 'abc'
        }))
    }

    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSubmit((data) => submitForm(data))}>
                <div>
                    <label>Name:</label>
                    <input {...register('userid')} type="text" id="userid" autoComplete="off"></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input {...register('password')} type="password" id="password"></input>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
                </form>
                <div>
                    <button type="button" onClick={onReset} >Reset</button>
                </div>
            </div>
        </React.Fragment>
    )
}
