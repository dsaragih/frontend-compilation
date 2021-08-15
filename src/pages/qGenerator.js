import styles from './qGenerator.module.css';
import React from 'react';

const colors = ["#420420", "#008080", "#8a2be2", "#047806", "#000080"]

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      content: "",
      index: 0
    };
    this.randomQuote = this.randomQuote.bind(this);
  }

  async randomQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    this.setState(state => ({
      author: data.author,
      content: data.content,
      index: (state.index + 1) % colors.length
    }));
  }

  async componentDidMount() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    this.setState({
      author: data.author,
      content: data.content
    });
  }
  
  render() {
    const color = colors[this.state.index];
    return (
      <div className={styles.page} style={{backgroundColor: color}}>
        <div className={styles.quoteBox}>
          <blockquote className={styles.text} style={{color: color}}>{this.state.content}</blockquote>
          <cite className={styles.author} style={{color: color}}>- {this.state.author}</cite>
          <button className={styles.newQuote} style={{backgroundColor: color}} onClick={this.randomQuote}>New Quote</button>
          <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className={styles.twitter_share_button + ' '+ styles.fa +''+ styles.fa_twitter} data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    );
    
  }
}

export default Quote;