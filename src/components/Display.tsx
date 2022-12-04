import React from "react"
import { useSelector } from "react-redux";


export const DisplayComponent = () => {

    const {user} = useSelector((state: any) => state['auth'])

    return (
        <React.Fragment>
                Display component.
                {user}
        </React.Fragment>
    )
}