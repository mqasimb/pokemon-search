const React = require('react');
const { Navbar, Nav, NavItem } = require('react-bootstrap');
const { Link, browserHistory } = require('react-router');

class App extends React.Component {
    visitFavorite() {
    	browserHistory.push('/favorite-pokemon')
    }
    render(props) {
    	var navBarStyle = {
            backgroundColor: '#5CB85C',
            borderColor: '#5CB85C',
            paddingTop: '5px',
            paddingBottom: '5px'
        }
        var imageStyle = {
        	width: '200px'
        }
        var LinkStyle = {
            'color': '#06D7D4',
            textAlign: 'center'
        }
        return (
            <div className="top-margin">
	            <Navbar style={navBarStyle} fixedTop>
	                <Navbar.Header>
	                  	<Navbar.Brand>
	                    	<Link to='/'><img style={imageStyle} src="../../assets/titleimage.png"/></Link>
	                  	</Navbar.Brand>
	                  	<Navbar.Toggle />
	                </Navbar.Header>
	                
	                <Navbar.Collapse>
	                    <Nav pullRight>
							<NavItem onClick={this.visitFavorite.bind(this)} className="nav-text-container"><span className="nav-link">Favorite Pokemon</span></NavItem>
	                    </Nav>
	                </Navbar.Collapse>
	            </Navbar>
	            {this.props.children}
            </div>
        )
    }
}

module.exports = App;