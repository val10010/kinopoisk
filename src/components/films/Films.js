import React, {Component} from 'react';
import {connect} from 'react-redux';
import {itemsFetchData} from '../../actions/items';
import {hashHistory} from 'react-router';
import './style.scss';


class Films extends Component {
  constructor(props){
    super(props);
  this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {itemsFetchData, filmSearch} = this.props;
    itemsFetchData(filmSearch); 
  }

  getImageSrc(obj) {
    if(obj === null) {
      return 'http://static.tvmaze.com/uploads/images/medium_portrait/66/166413.jpg';
    } else {
      return obj.medium;
    }
  }

  handleClick(id) {
    hashHistory.push(`/film/${id}`);
  }


  render() {
    const {itemsAllFilms} = this.props;

   return  (
     <div className="post-wrapper">
       {  itemsAllFilms.map(({show}) => {
          return (
            <div className="post" key={show.id} onClick={() => this.handleClick(show.id)}>
              <div className="post__title">
                <h4>{show.name}</h4>
                <h5>{show.type}</h5>
            </div>
              <img  src={this.getImageSrc(show.image)} className="post__image" alt={show.name}/>
            </div>
      )
    })}
     </div>
    );
  }

}

const mapStateToProps = (state,ownProps) => {
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    isHasData: state.isHasData,
    filmSearch: ownProps.params.name,
    itemsAllFilms: state.itemsAllFilms,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLoading: bool => dispatch(itemsIsLoading(bool)),
    itemsFetchData: film => dispatch(itemsFetchData(film))
  };
};


export default  connect(mapStateToProps, mapDispatchToProps)(Films);