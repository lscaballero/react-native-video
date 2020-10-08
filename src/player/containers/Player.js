import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';
import LayoutVideo from '../components/LayoutVideo';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
  };
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };
  onLoad = () => {
    this.setState({
      loading: false,
    });
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused,
    });
  };
  render() {
    return (
      <LayoutVideo
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
          />
        }
        loader={<ActivityIndicator color="blue" />}
        controls={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <Text>progress bas |</Text>
            <Text>time left |</Text>
            <Text>fullscreen |</Text>
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
