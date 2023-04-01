import React, { useState } from "react";
function NewBlog() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [createdby, setCreatedby] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Desc: ${desc}`);
    console.log(`Createdby: ${createdby}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Desc:
        <input
          type="text"
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
        />
      </label>
      <br />
      <label>
        createdby
        <input
          type="text"
          value={createdby}
          onChange={(event) => setCreatedby(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default NewBlog;