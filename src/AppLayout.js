import React, {Component} from 'react';
import {Text} from 'react-native';
//api
import Api from '../utils/api';
//componetes custom
import Home from './screens/containers/Home';
import Header from './sections/Header';
import SugestionsList from './videos/containers/SuggestionsList';
import CategoryList from './videos/containers/CategoryList';
import Movie from './screens/containers/Movie';
import Search from './sections/containers/Search';
//redux
import {connect} from 'react-redux';

class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await Api.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });

    const suggestionList = await Api.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList,
      },
    });
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />;
    } else {
      return (
        <Home>
          <Header />
          <Search />
          <CategoryList />
          <SugestionsList />
        </Home>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(AppLayout);
