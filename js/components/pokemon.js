const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions/index');
const router = require('react-router');
const Link = router.Link;
const Button = require('react-bootstrap/lib/Button');
const Thumbnail = require('react-bootstrap/lib/Thumbnail');
const Glyphicon = require('react-bootstrap/lib/Glyphicon');
const Badge = require('react-bootstrap/lib/Badge');
const Modal = require('react-bootstrap/lib/Modal');

class Pokemon extends React.Component {
    thumbnailClick(event) {
        event.preventDefault();
        this.props.dispatch(actions.showModal(this.props.name));
        console.log(event.target);
        console.log(this.props.name);
    }
    favoriteClick(event) {
        event.stopPropagation();
        this.props.dispatch(actions.toggleFavorite(this.props.name, this.props.id));
    }
    modalClose() {
        this.props.dispatch(actions.closeModal());
    }
    render() {
        var favoriteStyle;
        var favoriteStar = <Button className='favorite-button' bsStyle='success' onClick={this.favoriteClick.bind(this)}><Glyphicon glyph='star'/>Add To Favorite</Button>;
        if(this.props.favoritePokemon[this.props.name.toUpperCase()]) {
            favoriteStar = (this.props.favoritePokemon[this.props.name.toUpperCase()].favorite) ? (<Button className='favorite-button' bsStyle='danger' onClick={this.favoriteClick.bind(this)}><Glyphicon glyph='heart'/>Favorite</Button>) : (
                <Button className='favorite-button' bsStyle='success' onClick={this.favoriteClick.bind(this)}><Glyphicon glyph='star'/>Add To Favorite</Button>);
        }
        return(
            <div className='pokemon'>
            <Thumbnail className='pokeThumbnail' src={this.props.src} ><Link to={'/pokemon/'+this.props.name.toLowerCase()}><Badge className='pokeNumber'>#{this.props.id}</Badge> {this.props.name}</Link> {favoriteStar} </Thumbnail>
        </div>
            )
    }
}

function mapStateToProps(state, props) {
    return({
        showModal: state.showModal,
        clickedPokemon: state.clickedPokemon,
        favoritePokemon: state.favoritePokemon
    })
}

var Container = connect(mapStateToProps)(Pokemon);

module.exports = Container;