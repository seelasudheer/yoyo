import React from 'react';
class Welcome extends React.Component{
    render(){
            const {name,heroName} =this.props
        return <h1>
            Welcome {name} that has {heroName} 
            </h1>
    }
}
export default Welcome;