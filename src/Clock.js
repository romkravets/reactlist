import React, {Fragment} from 'react';

export default class Clock extends React.Component {
   state = { time: new Date()};

   tick = () => this.setState({time: new Date()});

   componentDidMount() {
      this.timer = setInterval(()=> this.tick(), 1000);
   }

   componentWillMount(){
      clearInterval(this.timer);
   }

   render() {
      return (
      <Fragment>
         <div>Clock</div>
         <div>Time: {this.state.time.toLocaleTimeString()}</div>
       </Fragment>
      )
   }
}