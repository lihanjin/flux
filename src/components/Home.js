import React from 'react';

//首字母大写

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Child from './Child';

var CountStore = require('../stores/CountStore');

class Home extends React.Component{


    constructor(props){  /*构造函数*/


        super(props);

        this.state={

            count:CountStore.getCount()
        }

   

    }
  
    render(){
        return(

            <div>
               


                 <div>
                        <h2>Home组件-{this.state.count}</h2>
                        <ul>
                        <li>
                            <Link to={`${this.props.match.url}/user`}>
                                 home下面的用户
                            </Link>
                        </li>
                        <li>
                            <Link to={`${this.props.match.url}/article`}>
                                  home下面的文章
                            </Link>
                        </li>
                      
                        </ul>

                        <Route path={`${this.props.match.url}/:info`} component={Child}/>
                        <Route exact path={this.props.match.url} render={() => (
                            <h3>选择一个组路由</h3>
                        )}/>
                    </div>


            </div>
        )

    }
}




//一个组件就是一个模块   外部要用这个模块的话就得暴露这个模块

export default Home;