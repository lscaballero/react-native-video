import React, {Component} from 'react';
import {Animated} from 'react-native';
//custom
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/Header';
import Close from '../../sections/components/Close';
import Details from '../../videos/components/Details';
//redux
import {connect} from 'react-redux';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0.1),
  };
  closeVideo = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };
  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }
  render() {
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}>
        <MovieLayout>
          <Header>
            <Close onPress={this.closeVideo} />
          </Header>
          <Player />
          <Details {...this.props.movie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(Movie);
