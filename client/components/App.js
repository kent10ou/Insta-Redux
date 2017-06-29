import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps (state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


// two functions (mapState/DispatchToProps) that are going to take the state (posts/comments) and dispatch (actionCreators) 
// and will surface those data and funcs via props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;