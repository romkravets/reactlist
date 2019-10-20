import React, {Fragment} from 'react';

export default class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {inputValue: ''};
   }

   onChange = event => this.setState({inputValue: event.target.value})

   render() {
      return (
         <Fragment>
               <div className="header">{this.props.title}</div>
               <div>
                  <input value={this.state.inputValue} onChange={this.onChange}/>
                  <button>Add</button>
               </div>
         </Fragment>
      )
   }
}