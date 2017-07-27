import React from 'react';

class Child extends React.Component{
    render(){

        return(

            <div>
                <h2>这是一个Child组件</h2>

               {this.props.match.params.info}

            </div>
        )
    }
    
}

export default  Child;

