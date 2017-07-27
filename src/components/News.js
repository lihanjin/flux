import React from 'react';

import  axios from 'axios';  /*引入插件    安装插件  https://www.npmjs.com/package/axios*/


var CountStore = require('../stores/CountStore');
var CountActions = require('../actions/CountActions');


class News extends React.Component{



    constructor(props){  /*初始化触发的构造函数*/

        super(props);  /*继承父类的构造方法*/

        this.state={
            count:CountStore.getCount()  /*获取 store 里面的数据*/
        }      

        this._Change=this._Change.bind(this);
     
    }

    componentDidMount(){


        console.log('2143214');

        var that=this;
        CountStore.addChangeListener(function(){

                 that.setState({

                    count:CountStore.getCount()
                })
        })

        // CountStore.addChangeListener(this._Change())
    }

    _Change(){/*监听store的改变  如果store改变以后 重新改变view的数据*/
       

    }

    addCount(){

            CountActions.addCount();
            
            
            /*   执行action 里面的addCount

                action 里面的addCount   又会执行CountDispatcher   CountDispatcher.dispatch  传值


                又会执行CountDispatcher 执行 store
            
            */
    }
  
    render(){

        return(
            <div>
                这是一个新闻

                <button onClick={this.addCount}>增加数据</button>

                {this.state.count}
            </div>
        )

    }
}

export default News;