import React, {Fragment} from 'react';

export default class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {inputValue: ''};
   }

   onChange = event => this.setState({inputValue: event.target.value})

   onClick = () => {
      this.props.onAdd(this.state.inputValue);
      this.setState({inputValue: ''});
   }

   render() {
      return (
         <Fragment>
               <div className="header">{this.props.title}</div>
               <div>
                  <input value={this.state.inputValue} onChange={this.onChange}/>
                  <button onClick={this.onClick}>Add</button>
               </div>
         </Fragment>
      )
   }
}