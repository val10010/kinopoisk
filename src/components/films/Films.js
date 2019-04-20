import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../../actions/items";
import { hashHistory } from "react-router";
import "./style.scss";

class Films extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { itemsFetchData, filmSearch } = this.props;
    itemsFetchData(filmSearch);
  }

  getImageSrc(obj) {
    if (obj === null) {
      return "http://static.tvmaze.com/uploads/images/medium_portrait/66/166413.jpg";
    } else {
      return obj.medium;
    }
  }

  handleClick(id) {
    hashHistory.push(`/film/${id}`);
  }

  render() {
    const { itemsAllFilms, isLoading } = this.props;

    if (isLoading) {
      return <p className="bg info">Loading…</p>;
    }

    if (itemsAllFilms.length === 0) {
      return (
        <p className="bg info">Sorry! There was an error loading the films</p>
      );
    }

    return (
    <div className="bg">
      <section className="cards">
        {itemsAllFilms.map(({ show }) => (
          <article
            className="card"
            key={show.id}
            onClick={() => this.handleClick(show.id)}
          >
            <div className="card__info-hover" />
            <img src={this.getImageSrc(show.image)} className="card__img" />
            <div className="card__info">
              <span className="card__category"> {show.type}</span>
              <h3 className="card__title">{show.name}</h3>
            </div>
          </article>
        ))}
      </section>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    filmSearch: ownProps.params.name,
    itemsAllFilms: state.itemsAllFilms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    itemsFetchData: film => dispatch(itemsFetchData(film))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Films);
