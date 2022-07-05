import axios from "axios";
import Link from "next/link";
import React from "react";

const index = ({ heros }) => {
  return (
    <div className="container">
      <h3 className="display-5 text-center my-2 underline">
        Superhero identity Manager
      </h3>
      <div className="row">
        {heros.map((hero) => {
          return (
            <div className="col" key={hero._id}>
              <div
                className="card border border-2 my-2 "
                style={{ width: "18rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{hero.superHero}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link href={`/${hero._id}`}>
                    <a className="btn btn-primary mx-2">View Hero</a>
                  </Link>
                  <Link href={`/${hero._id}/edit`}>
                    <a className="btn btn-primary">Edit Hero</a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero/");
  const { hero } = res.data;
  console.log(hero);
  return {
    props: { heros: hero }, // will be passed to the page component as props
  };
}

export default index;
