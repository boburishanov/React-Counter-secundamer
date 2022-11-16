import React, { Component } from 'react';

class Dcomp extends Component {
    render() {
        const {Dplus, Dminus, val, Dstart} = this.props;
        return (
            <div className='a'>
                <div className="info">
                    <button onClick={Dplus}>+</button>
                        <h1>{val}</h1>
                    <button onClick={Dminus}>-</button>
                </div>
                <div className="butt">
                    <button onClick={Dstart}>Start</button>
                    <button>Stop</button>
                </div>
            </div>
        );
    }
}

export default Dcomp;
