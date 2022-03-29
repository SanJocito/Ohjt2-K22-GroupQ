import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ name: "", position: "", level: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Kohde</label>
          <input
            type="text"
            className="form-control"
            id="kohde"
            value={form.kohde}
            onChange={(e) => updateForm({ kohde: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Paikka</label>
          <input
            type="text"
            className="form-control"
            id="paikka"
            value={form.paikka}
            onChange={(e) => updateForm({ paikka: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Maa</label>
          <input
            type="text"
            className="form-control"
            id="maa"
            value={form.maa}
            onChange={(e) => updateForm({ maa: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
