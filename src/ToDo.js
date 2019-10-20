import React, {Fragment} from 'react';

export default class ToDo extends React.Component {
   render() {
      return (
         <Fragment>
            {this.props.todoList.map(todo => <div key={todo}>{todo}</div>)}
         </Fragment>
      )
   }
}

ToDo.defaultProps = { todList: []};
ToDo.displayName = 'BodyList';