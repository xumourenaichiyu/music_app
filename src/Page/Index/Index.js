import React, { Component ,Suspense,lazy} from 'react';
import {Route} from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
import './Index.scss'
const CatList = lazy(()=>import('./CatList'))
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='index'>
                <Suspense fallback={<div>加载中...</div>}>
                    <div className='container'>
                        <Route path='/' component={CatList}/>
                    </div>
                </Suspense>
                <Footer/>
            </div>
        );
    }
}
 
export default Index;