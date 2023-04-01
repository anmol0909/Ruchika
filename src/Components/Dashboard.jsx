import React from 'react'
import {Link} from 'react-router-dom';

const Dashboard =()=> {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <Link to ="NewBlog"><li>Add new blog</li></Link>
        <Link to = "ShowBlog"><li>Show blog</li></Link>
      </ul>
    </div>
  );
};

export default Dashboard;
