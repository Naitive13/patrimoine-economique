import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import List from "../../components/List";

export default function Possession() {
  const [possessions, setpossessions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/possession")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const item = data[1].data.possessions;
        setpossessions(item);
      });
  }, []);

  return (
    <>
      <Layout>
        <List possessions={possessions} />
      </Layout>
    </>
  );
}
