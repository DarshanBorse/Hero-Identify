import axios from "axios";
import Router from "next/router";
import { useState } from "react";

const addNewHero = () => {
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(`http://localhost:3000/api/hero`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });

      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h6 className="display-6 text-center mt-2 font-bold">
        Add a new hero identity
      </h6>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Super Hero
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="superHero"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Real Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="realName"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add new hero
        </button>
      </form>
    </div>
  );
};

export default addNewHero;
