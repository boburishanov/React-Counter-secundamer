import React, { Component } from 'react';

class Comp extends Component {
    render() {
        const {Cplus, Cminus, val,Cstart} = this.props;
        return (
            <div className='a'>
                <div className="info">
                    <button onClick={Cplus}>+</button>
                        <h1>{val}</h1>
                    <button onClick={Cminus}>-</button>
                </div>
                <div className="butt">
                    <button onClick={Cstart}>Start</button>
                    <button>Stop</button>
                </div>
            </div>
        );
    }
}

export default Comp;
