import React from 'react';
import { Link } from 'react-router';

// const Main = React.createClass({
class Main extends React.Component {
    render () {
        return (
            <div>
                <h1>
                    <Link to="/">InstaRedux</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

export default Main;