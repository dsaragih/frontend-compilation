import React from 'react';
import styles from './timer.module.css';
import url from './beep/beep.mp3';

const format = time => new Date(1000 * time).toISOString().substring(14, 19);

const Label = props => {
    return (
      <div className={styles.adjustment}>
          <button 
          className={styles[`${props.label}-decrement`] + ' ' + styles.button} 
          onClick={() => props.onClick(props.label, "dec")}
          >
            &darr;
          </button>
          <span className={styles[`${props.label}-length`]}>{format(props.time)}</span>
          <button 
          className={styles[`${props.label}-increment`]+ ' ' + styles.button} 
          onClick={() => props.onClick(props.label, "inc")}
          >
            &uarr;
          </button>
      </div>
    )
}

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      break: 5 * 60,
      session: 25 * 60,
      setting: "Session",
      belowMinute: false,
      start: false
    }
    this.sessionTimer = this.state.session;
    this.breakTimer = this.state.break;

    this.handleClick = this.handleClick.bind(this);
    this.handleSession = this.handleSession.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  audio = new Audio(url);

  handleClick(label, adjustment) {
    if (label === "break") {
      if (adjustment === "inc") {
        if (this.state.break === 3600) {
          return;
        } else {
          this.setState({break: this.state.break + 60});
          this.breakTimer += 60;
        }
      } else {
        if (this.state.break === 60) {
          return;
        } else {
          this.setState({break: this.state.break - 60});
          this.breakTimer -= 60;
        }
      }
    } else {
      if (adjustment === "inc") {
        if (this.state.session === 3600) {
          return;
        } else {
          this.setState({session: this.state.session + 60});
          this.sessionTimer += 60;
        }
      } else {
        if (this.state.session === 60) {
          return;
        } else {
          this.setState({session: this.state.session - 60});
          this.sessionTimer -= 60;
        }
      }
    }
  };
  
  handleReset() {
    this.audio.load();
    this.setState({
      break: 5 * 60,
      session: 25 * 60,
      setting: "Session",
      belowMinute: false,
      start: false
    });
    this.sessionTimer = 25 * 60;
    this.breakTimer = 5 * 60;
  }

  handleStart() {
    this.setState({
      start: !this.state.start
    }, () => {
      if (this.state.setting === "Session" && this.state.start) {
        this.handleSession();
      } else {
        this.handleBreak();
      }
    });
  }

  handleSession() {
    
    const sessionInterval = setInterval(() => {
      if (this.state.start) {
        this.setState(state => ({
          session: state.session - 1
        }));
      } else {
        clearInterval(sessionInterval);
      }
      //console.log(this.state.session, this.state.setting);
      
      if (this.state.session < 60) this.setState({belowMinute: true});
      
      if (this.state.session <= 0) {
        clearInterval(sessionInterval);
        this.audio.play();  
        this.setState({
          setting: "Break",
          session: this.sessionTimer,
          belowMinute: false
        });
        this.handleBreak();
      }
      
    }, 1000);
  };
  
  handleBreak() {
    const breakInterval = setInterval(() => {
      if (this.state.start) {
        this.setState(state => ({
          break: state.break - 1
        }))
      } else {
        clearInterval(breakInterval);
      }     
      //console.log(this.state.break, this.state.setting);

      if (this.state.break < 60) this.setState({belowMinute: true});

      if (this.state.break <= 0) {
        clearInterval(breakInterval);
        this.audio.play();
        this.setState({
          setting: "Session",
          break: this.breakTimer,
          belowMinute: false
        });
        this.handleSession();
      }
  }, 1000);


  }
  
  render() {
    const color = this.state.belowMinute ? '#8B0000' : '#000000';
    return (
    <div className={styles.container}>

    <div className={styles.Clock}>
      <div className={styles.title}>25 + 5 Clock</div>
      <div className={styles['break-label']}>
        Break Length
        <Label time={this.breakTimer} onClick={this.handleClick} label="break"/>
      </div>
      <div className={styles['session-label']}>
        Session Length
        <Label time={this.sessionTimer} onClick={this.handleClick} label="session"/>
      </div>
      <div className={styles.timer} style={{color: color}}>
        <div className={styles['timer-label']}>{this.state.setting}</div>
        <div className={styles['time-left']}>
          {this.state.setting === "Session" ? format(this.state.session) : format(this.state.break)}
        </div>
      </div>
      <button className={styles.start_stop + ' ' + styles.button} onClick={this.handleStart}>Start/Stop</button>
      <button className={styles.reset + ' ' + styles.button} onClick={this.handleReset}>Reset</button>
    </div>
    </div>
    );
  }
};

export default Timer;