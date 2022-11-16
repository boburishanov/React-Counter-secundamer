import React, { Component } from 'react';
import Acomp from '../LeftComponet/Acomp/Acomp'
import Bcomp from '../LeftComponet/Bcomp/Bcomp';


class LeftComponent extends Component {
    render() {
        const {Aval, Bval,Aplus, Aminus, Bplus, Bminus, Astart, Bstart} = this.props;
        return (
            <div className='box'>
                <Acomp 
                val={Aval} 
                Aplus={Aplus} 
                Aminus={Aminus} 
                Astart={Astart}

                />
                <Bcomp 
                val={Bval} 
                Bplus={Bplus} 
                Bminus={Bminus}
                Bstart={Bstart}

                />
            </div>
        );
    }
}

export default LeftComponent;
