import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../layout";
import DoubleDatePicker from "../../components/DoubleDatePicker";
import MarginTop from "../../components/MarginTop";
import OrangeButton from "../../components/OrangeButton";
import Graph from "../../components/Graph";
import DayPicker from "../../components/DayPicker";
import { useRef } from "react";

const labels = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#FFC00677",
      tension: 0.4,
      pointBackgroundColor: "#000000bb",
    },
  ],
};

export default function Patrimoine() {
  const jour = useRef();
  const dateDebut = useRef();
  const dateFin = useRef();

  async function click(e) {
    const start = dateDebut.current.value;
    const end = dateFin.current.value;
    const day = jour.current.value;

    if (start == "" || end == "" || start > end) {
      alert("not ok");
    } else {
      const req = {
        dateDebut: start,
        dateFin: end,
        jour: day,
      };
      alert(start);
      try {
        const response = await fetch("http://localhost:3000/patrimoine/range", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req),
        });
        const result = await response.json();
        console.log(result);
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <>
      <Layout>
        <Container fluid>
          <MarginTop />
          <Row>
            <Col className="text-center" xs={6}>
              <OrangeButton
                text={"Obtenir Un Graphe Du Patrimoine"}
                click={click}
              />
            </Col>
            <Col xs={1}></Col>
            <Col xs={1}>
              <DayPicker jour={jour} />
            </Col>
            <DoubleDatePicker date1={dateDebut} date2={dateFin} />
          </Row>

          <MarginTop />
          <Graph data={data} />
        </Container>
      </Layout>
    </>
  );
}
