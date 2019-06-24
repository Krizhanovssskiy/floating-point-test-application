import React, { Component } from 'react';

import './floating-point-unit.css';


export default class FloatingPointUnit extends Component {
  mainDiv = React.createRef();

  state = {
    html: '',
    isOpenPanel: false,
    weightText: false,
    divWidth: null,
  };

  isFocusBlock = () => this.setState ({isOpenPanel: true});

  valueInputBlock = (e) => this.setState({html: e.target.innerText});

  isBlur = () => {
    setTimeout(() => {
      this.setState({
        isOpenPanel: false
      })
    }, 100)
  };

  boldText = () => this.setState(({weightText}) => ({
    weightText: !weightText
  }));

  widthBlock = (e) => {
    if (e.target.innerWidth <= 550) {
      this.setState({divWidth: (500 - this.mainDiv.current.offsetWidth) / 2})
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.widthBlock)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.widthBlock)
  }

  render() {
    const { isOpenPanel, weightText, divWidth } = this.state;
    const classBlock = 'block-text';
    return (
      <div
        className="block"
        ref={this.mainDiv}
      >
        <div
          className='block-form'
          style={{left: !divWidth ? '80px' : (80 - divWidth) + 'px'}}
        >
          <div
            className={!weightText ?  classBlock : classBlock + ' weight'}

            onFocus={this.isFocusBlock}
            onInput={this.valueInputBlock}
            onBlur={this.isBlur}
            contentEditable='true'
          >
          </div>

          {
            isOpenPanel
              ?
                <button
                  className={weightText && 'weight'}
                  onClick={this.boldText}
                >
                  {
                    weightText
                    ? 'bold text'
                    : 'regular text'
                  }
                </button>
              : null
          }
        </div>

      </div>
    )
  }
}