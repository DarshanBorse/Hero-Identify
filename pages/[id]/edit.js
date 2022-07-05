import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const editHero = ({ heros }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: heros.superHero,
    realName: heros.realName,
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
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3 text-center">Add a new hero identity</h1>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Super Hero
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="superHero"
            value={form.superHero}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Real Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="realName"
            value={form.realName}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit a hero
        </button>
      </form>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  const { hero } = res.data;
  console.log(hero);
  return {
    props: { heros: hero },
  };
}

export default editHero;
