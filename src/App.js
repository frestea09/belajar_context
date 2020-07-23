import React from 'react'
import ComponentA from './Component/ComponentA'
import {UserProvider} from './Component/UserContent'

class App extends React.Component{
  render(){
    return(
      <div>
          <UserProvider value="ganteng">
            <ComponentA/>
          </UserProvider>
      </div>
    )
  }
}

export default App