import React, { Component } from 'react';
import Dcomp from '../RigthtComponent/Dcomp/Dcomp'
import Comp from '../RigthtComponent/Ccomp/Comp'

class RigthtComponent extends Component {
    render() {
        const {Cval, Dval, Cplus, Cminus, Dplus, Dminus, Cstart,Dstart } = this.props;
        return (
            <div className='box'>
                <Comp 
                val = {Cval} 
                Cplus={Cplus} 
                Cminus={Cminus} 
                Cstart={Cstart}
                />
                <Dcomp 
                val = {Dval}  
                Dplus={Dplus} 
                Dminus={Dminus}
                Dstart={Dstart}
                

                />
            </div>
        );
    }
}

export default RigthtComponent;
