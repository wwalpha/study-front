import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends Component {

  constructor() {
    super();

    this.handleOnEnded = this.handleOnEnded.bind(this);

    this.state = { pos: 0 };
  }

  componentDidMount() {
    this.audio.addEventListener('ended', this.handleOnEnded);
  }

  componentWillUnmount() {
    this.audio.removeEventListener('ended', this.handleOnEnded);
  }

  handleOnEnded() {
    if (this.state.pos === this.props.playlist.length) {
      this.setState({ pos: 0 });
      return;
    }

    this.playNext();
  }

  start() {
    this.playNext();
  }

  playNext() {
    const { pos } = this.state;

    this.audio.src = this.props.playlist[pos].source;
    this.audio.load();
    this.audio.play();

    this.wordText.innerText = this.props.playlist[pos].word;

    // update status
    this.setState({ pos: pos + 1 });
  }

  render() {
    return (
      <div>
        <audio ref={(audio) => { this.audio = audio; }} />
        <span ref={(wordText) => { this.wordText = wordText; }} />
      </div>
    );
  }
}

AudioPlayer.defaultProps = {
  autoplay: false,
  playlist: [],
};

AudioPlayer.props = {
  playlist: PropTypes.arrayOf(PropTypes.object),
  autoplay: PropTypes.bool,
};

export default AudioPlayer;
