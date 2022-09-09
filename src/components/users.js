import React from "react";
import ReactDOM from "react-dom";

const Users = () => {

function getData(callback) {
  fetch("http://localhost:3000/api/user/")
    .then(results => {
      return results.json();
    })
    .then(callback);
}

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      data : null
    };
}

handleClick() {
  this.props.getData(data => this.setState({ data }));
}

_renderUsers() {
  return (
    <ol>
      { 
        this.state.data.map(user => <li key={ user.id }>{ user.name }</li>) 
      }
    </ol>
  );
}

render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Get All Users</button>
        { this.state.data && this._renderUsers() }
      </div>
    );
  }
}

ReactDOM.render(<Button getData={ getData }/>, document.getElementById("root"));
};
export default Users

///////////////////////////////////////////////////////////////////////////////////////////////

// import * as React from 'react'
// import { Link } from 'react-router-dom'


// export default function UserList(props) {

//   return (
//     <div>
//       <h1>List of users</h1>
//       <ul>

//         {props.users && props.users.map(user =>
//           <li key={user.id}>
//             <Link to={`/users/${user.id}`}> {user.name} </Link>
//           </li>
//         )}
//       </ul>
//     </div>
//   )
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////