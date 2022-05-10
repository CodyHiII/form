import React from "react";
import { Link } from "react-router-dom";

const UserPage = (props) => {
  const user = props.user;
  return (
    <div>
      <div>Welcome {user.name}, what do you say?</div>
      <Link to='/'>
        <button>go back</button>
      </Link>
    </div>
  );
};

export default UserPage;
