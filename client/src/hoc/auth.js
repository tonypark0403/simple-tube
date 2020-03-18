import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (wrappedComponent, option, adminRoute = null) {

    //null    =>  public
    //true    =>  private
    //false   =>  only for not login user
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(res => {
                console.log(res)
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                } else {
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else {
                        if (option === false)
                            props.history.push('/')
                    }
                }
            })
        }, [])

        return (
            <wrappedComponent />
        )
    }
    return AuthenticationCheck
}