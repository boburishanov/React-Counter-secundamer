import React, { Component } from 'react';

class Acomp extends Component {
    render() {
        const {Aplus, Aminus, val, Astart} = this.props;
        return (
            <div className='a'>
                <div className="info">
                    <button onClick={Aplus}>+</button>
                        <h1>{val}</h1>
                    <button onClick={Aminus}>-</button>
                </div>
                <div className="butt">
                    <button onClick={Astart}>Start</button>
                    <button>Stop</button>
                </div>
            </div>
        );
    }
}

export default Acomp;
