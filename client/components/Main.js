import React from 'react';
import { Link } from 'react-router';

// const Main = React.createClass({
class Main extends React.Component {
    render () {
        return (
            <div>
                <Link to="/">InstaRedux</Link>
            </div>
        )
    }
}

export default Main;