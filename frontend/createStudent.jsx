import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateStudent() {
  return (
    <div className="container">
      <form method="post" action="/students">
        <h2>Add New Student</h2>
        <div className="form-group">
          <label htmlFor="e1">Name</label>
          <input name="name" type="text" className="form-control" id="e1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="e3">Total Credits</label>
          <input name="total_credits" type="text" className="form-control" id="e3" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="e2">Department Name</label>
          <input name="department_name" type="text" className="form-control" id="e2" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreateStudent;
