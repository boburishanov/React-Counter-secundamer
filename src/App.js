import React, { Component } from 'react';
import LeftComponent from '../src/components/LeftComponet/LeftComponent';
import RigthtComponent from '../src/components/RigthtComponent/RigthtComponent';
import './App.css'

class App extends Component {

  state = {
    Acom: 0,
    Bcom: 0,
    Ccom: 0,
    Dcom: 0,
    stop: '',
    active:true,

    day: 0,
    soat:0,
    minut:0,
    secund:0,
  }

  // glavni btn start-----------------------------------------------------------


  plusBtnF = () =>{
    const {Acom, Bcom, Ccom, Dcom} = this.state;
    this.setState({
      Acom: Acom + 1,
      Bcom: Bcom + 1,
      Ccom: Ccom + 1,
      Dcom: Dcom + 1,
      active:false
    })
  }

  minusBtnF = ()=>{
    const {Acom, Bcom, Ccom, Dcom} = this.state
    this.setState({
      Acom: Acom - 1,
      Bcom: Bcom - 1,
      Ccom: Ccom - 1,
      Dcom: Dcom - 1,
      active:false
    })

    if(Acom > 0 && Bcom > 0 && Ccom > 0 && Dcom > 0){
      this.setState({
        Acom: Acom - 1,
        Bcom: Bcom - 1,
        Ccom: Ccom - 1,
        Dcom: Dcom - 1,
        active:false
      })
    }else{
      this.setState({
        Acom: 0,
        Bcom: 0,
        Ccom: 0,
        Dcom: 0,
        active:false
      })
    }
  }

  // glavni btn end----------------------------------------------------------------------


  // kichik btn start---------------------------------------------------------

  Aplus = () =>{
    const {Acom} = this.state;
    this.setState({
      Acom: Acom + 1,
      active:false
      
    })
  }

  Aminus = () =>{
    const {Acom} = this.state;
    this.setState({
      Acom: Acom -1,
      active:false
    })

    if(Acom > 0){
      this.setState({
        Acom: Acom -1,
        active:false
      })
    }else{
      this.setState({
        Acom: 0,
        active:false
      })
    }


  }

  Bplus = () =>{
    const {Bcom} = this.state;
    this.setState({
      Bcom: Bcom + 1,
      active:false

    })
  }

  Bminus = () =>{
    const {Bcom} = this.state;
    this.setState({
      Bcom: Bcom - 1,
      active:false
    })
    if(Bcom > 0){
      this.setState({
        Bcom: Bcom - 1,
        active:false
      })
    }else{
      this.setState({
        Bcom: 0,
        active:false
      })
    }
  }


  Cplus = () =>{
    const {Ccom} = this.state;
    this.setState({
      Ccom: Ccom + 1,
      active:false
    })
  }

  Cminus = () =>{
    const {Ccom} = this.state;
    this.setState({
      Ccom: Ccom - 1,
      active:false
    })

    if(Ccom > 0){
      this.setState({
        Ccom: Ccom - 1,
        active:false
      })
    }else{
      this.setState({
        Ccom: 0,
        active:false
      })
    }
  }

  Dplus = () =>{
    const {Dcom} = this.state;
    this.setState({
      Dcom: Dcom + 1,
      active:false
    })
  }

  Dminus = () =>{
    const {Dcom} = this.state;
    this.setState({
      Dcom: Dcom - 1,
      active:false
    })

    if(Dcom > 0){
      this.setState({
        Dcom: Dcom - 1,
        active:false
      })

    }else{
      this.setState({
        secund: 0,
        active:false
      })
    }
  }



  // kichik btn end-------------------------------------------------------------------------



  // start btn start-------------------------------------------------------------------------
  

  StartBtn = ()=>{

    
    let stop = setInterval(()=>{
      const {day, soat, minut, secund, active} = this.state;

      if(secund<59){
        this.setState({
          secund: secund + 1,
        })
      }else if(minut < 59){
        this.setState({
          secund: 0,
          minut: minut + 1
        })
      }else if(soat < 23){
        this.setState({
          secund: 0,
          minut: 0,
          soat: soat + 1
        })
      }else{
        this.setState({
          secund: 0,
          minut: 0,
          soat: 0,
          day:day + 1
        })
      }
    },100)

    this.setState({
      stop:stop,
      active: true,
    })
  }

  // start btn end-------------------------------------------------------------------

  // stop btn start-------------------------------------------------------------

  StopBtn = ()=>{
    clearInterval(this.state.stop)
    this.setState({
      active: false
    })
  }

  // stop btn end------------------------------------------------------

// Reset btn start----------------------------------------------------------

  Reset=()=>{
    clearInterval(this.state.stop)

    this.setState({
      active:false,
      day: 0,
      soat:0,
      minut:0,
      secund:0,
      Acom: 0,
      Bcom: 0,
      Ccom: 0,
      Dcom: 0,

    })
  }

// Reset btn end --------------------------------------------------------------------




Astart=()=>{
  
  setInterval(()=>{
    const {Acom} = this.state
    if(Acom > 0){
      this.setState({
        Acom: Acom - 1,
      })
    }else{
      this.setState({
        Acom: 0,
      })
    }
    },1000000)

}

Bstart=()=>{
  
  setInterval(()=>{
    const {Bcom} = this.state
    if(Bcom > 0){
      this.setState({
        Bcom: Bcom - 1,
      })
    }else{
      this.setState({
        Bcom: 0,
      })
    }
    },100000)

}

Cstart=()=>{
  
  setInterval(()=>{
    const {Ccom} = this.state
    if(Ccom > 0){
      this.setState({
        Ccom: Ccom - 1,
      })
    }else{
      this.setState({
        Ccom: 0,
      })
    }
    },10000)

}

Dstart=()=>{
  
  setInterval(()=>{
    const {Dcom} = this.state
    if(Dcom > 0){
      this.setState({
        Dcom: Dcom - 1,
      })
    }else{
      this.setState({
        Dcom: 0,
      })
    }
    },1000)

}
  
  render() {
    return (
      <div className='container'>
        <div className="stiv">
            <button onClick={this.plusBtnF}>+</button>
            <h1>{this.state.day} : {this.state.soat} : {this.state.minut} : {this.state.secund}</h1>
            <button onClick={this.minusBtnF}>-</button>
        </div>
        <div className="max">
          <LeftComponent 
              Aval={this.state.Acom} 
              Bval={this.state.Bcom} 
              Aplus={this.Aplus} 
              Aminus={this.Aminus} 
              Bplus={this.Bplus} 
              Bminus={this.Bminus}
              Astart={this.Astart}
              Bstart={this.Bstart}
          />
          <RigthtComponent 
              Cval={this.state.Ccom} 
              Dval={this.state.Dcom} 
              Cplus={this.Cplus} 
              Cminus={this.Cminus} 
              Dplus={this.Dplus}
              Dminus={this.Dminus}
              Cstart={this.Cstart}
              Dstart={this.Dstart}
          />
        </div>
        <div className="btn">

          <button onClick={this.StartBtn} disabled={this.state.active ? true : false}>Start</button>
          <button onClick={this.StopBtn}>Stop</button>
          <button onClick={this.Reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;

