import React, { Component } from 'react'
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Download from 'material-ui/svg-icons/file/file-download';
import { SaveAs } from '../utils/FileUtils';
import { blue500 } from 'material-ui/styles/colors';

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
      this.setState({ pos: 0});
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
    
    console.log(this.audio);
    
    
    this.audio.play();

    // update status
    this.setState({ pos: pos + 1 });
  }

  render() {
    const { playlist } = this.props;

    // const word = playlist.length > 0 ? playlist[this.state.pos].word : undefined ;

    return (
      <div>
        <audio ref={(audio) => { this.audio = audio; }} />
      </div>
    );
  }
}

AudioPlayer.defaultProps = {
  autoplay: false,
  playlist: [],
}

AudioPlayer.props = {
  playlist: PropTypes.arrayOf(PropTypes.object),
  autoplay: PropTypes.bool,
}

export default AudioPlayer;