import axios from "axios";
import { useRouter } from "next/router";
import React from "react";

const eachHero = ({ heros }) => {
  const Router = useRouter();
  const heroId = Router.query.id;

  const deleteHero = async () => {
    try {
      const deleteHero = await axios(
        `http://localhost:3000/api/hero/${heroId}`,
        {
          method: "DELETE",
        }
      );
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container text-center">
      <h1 className="display-3">Identity of hero</h1>
      <div className="card border border-2 my-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Short Name: {heros.superHero}</h5>
          <p className="card-text">Real name: {heros.realName}</p>
          <a href="#" onClick={deleteHero} className="btn btn-danger">
            Delete Hero
          </a>
        </div>
      </div>
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

export default eachHero;
