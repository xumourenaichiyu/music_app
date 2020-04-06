import React, { Component ,Suspense,lazy} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';

const Index = lazy(()=>import('./Page/Index/Index'));
const PlayList = lazy(()=>import('./Page/playlist/Playlist'));
const MusicList = lazy(()=>import('./Page/musiclist/MusicList'));
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Router>
                    <Suspense fallback={<div>加载中</div>}>
                        <Route exact path='/' component={Index} />
                        <Route path='/playlist' component={PlayList} />
                        <Route path='/musiclist/:id' component={MusicList} />
                    </Suspense>
                </Router>
                
            </>
         );
    }
}
 
export default App;