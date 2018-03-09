import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bowling from '../sounds/bowling.wav';
import abides from '../sounds/abides.wav';

class Alert extends Component {
  componentDidMount() {
    Notification.requestPermission();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.sendAlert(this.props.status);
    }
  }

  sendAlert(status) {
    let audio = null;
    // let notification = null;
    if (status === 'working') {
      // notification = new Notification('HERE WE GO', {
      //   body: this.props.texts[1]
      // });
      audio = new Audio(abides);
    } else if (status === 'resting') {
      // notification = new Notification('Relax, man.', {
      //   body: this.props.texts[2]
      // });
      audio = new Audio(bowling);
    }
    if (audio) audio.play();
  }

  render() {
    return null;
  }
}

Alert.propTypes = {
  // texts: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  // texts: state.alertReducer.texts,
  status: state.timerReducer.status
});

export default connect(mapStateToProps)(Alert);
