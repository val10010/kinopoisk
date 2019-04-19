import React,{Component} from 'react';
import {connect} from 'react-redux';
import {itemCurrentFilm} from '../../actions/items';
import './style.scss';


class FilmCard extends Component {
constructor(props) {
  super(props);
}
componentDidMount() {
  const {filmId, itemCurrentFilm} = this.props;
  itemCurrentFilm(filmId);
}


  render() {
    const {currentFilm, isLoading, hasErrored} = this.props;

    if (hasErrored) {
      return <p className="bg info">Sorry! There was an error loading the films</p>;
    }

    if (isLoading) {
      return <p className="bg info">Loading…</p>;
    }

    return ( 
    <div className="bg">
     <div className="wrapper-fullpost">
        <div className="fullpost">
            <div className="fullpost__title">
                {currentFilm.name}
            </div>
            <div className="fullpost__content">
                <img src={currentFilm.image && currentFilm.image.medium || 'http://static.tvmaze.com/uploads/images/medium_portrait/66/166413.jpg'} />
                <div className="fullpost__content__table">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name:</td><td>{currentFilm.name}</td>
                      </tr>
                      <tr>
                        <td>Premiered:</td><td>{currentFilm.premiered}</td>
                      </tr>
                      <tr>
                        <td>Country:</td><td>{currentFilm.network && currentFilm.network.country.name}</td>
                      </tr>
                      <tr>
                        <td>Status: </td><td>"{currentFilm.status}"</td>
                      </tr>
                      <tr>
                        <td>Language: </td><td>{currentFilm.language}</td>
                      </tr>
                      <tr>
                        <td>Show Type: </td><td>{currentFilm.type}</td>
                      </tr>
                      <tr>
                        <td>Time: </td><td>{currentFilm.runtime} min</td>
                      </tr>
                      <tr>
                        <td>Description: </td><td  dangerouslySetInnerHTML={{ __html: currentFilm.summary}}/>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
     </div>
     </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    filmId: ownProps.params.name,
    currentFilm: state.itemCurrentFilm,
    isLoading: state.itemsIsLoading,
    hasErrored: state.itemsHasErrored,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    itemCurrentFilm: film => dispatch(itemCurrentFilm(film)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);