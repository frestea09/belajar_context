import React from 'react'
import {UserConsumer} from './UserContent'
function ComponentB(){
    return(
        <div>
            <UserConsumer>
                {
                    username =>{
                        return <div> hello {username}</div>
                    }
                }
            </UserConsumer>
        </div>
    )
}

export default ComponentB