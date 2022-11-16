import React, { Component } from 'react';

class Bcomp extends Component {
    render() {
        const {Bplus, Bminus, val, Bstart} = this.props;
        return (
            <div className='a'>
                <div className="info">
                    <button onClick={Bplus}>+</button>
                        <h1>{val}</h1>
                    <button onClick={Bminus}>-</button>
                </div>
                <div className="butt">
                    <button onClick={Bstart}>Start</button>
                    <button>Stop</button>
                </div>
            </div>
        );
    }
}

export default Bcomp;
