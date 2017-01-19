const React = require('react');
var Bootstrap = require('react-bootstrap')

class App extends React.Component {
    
    render(props) {
        return (
            <div>
            {this.props.children}
            </div>
            )
    }
}

module.exports = App;