import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Layout from "../../layout";
import DoubleDatePicker from "../../components/DoubleDatePicker";
import MarginTop from "../../components/MarginTop";
import OrangeButton from "../../components/OrangeButton";
import Graph from "../../components/Graph";
import DayPicker from "../../components/DayPicker";
import fetchRange from "./fetchRange";
import fakeInfo from "./fakeChartData";

export default function Patrimoine() {
  const [chartInfo, setchartInfo] = useState(fakeInfo);
  const jour = useRef();
  const dateDebut = useRef();
  const dateFin = useRef();

  const newData = async () => {
    const result = await fetchRange(jour, dateDebut, dateFin);
    console.log(result);
    const newValues = {
      labels: Object.keys(result),
      datasets: [
        {
          label: "Patrimoine",
          data: Object.values(result),
          fill: false,
          borderColor: "#FFC00677",
          tension: 0.4,
          pointBackgroundColor: "#000000bb",
        },
      ],
    };
    setchartInfo(newValues);
  };

  return (
    <>
      <Layout>
        <Container fluid>
          <MarginTop />
          <Row>
            <Col className="text-center" xs={6}>
              <OrangeButton
                text={"Obtenir Un Graphe Du Patrimoine"}
                click={() => newData()}
              />
            </Col>
            <Col xs={1}></Col>
            <Col xs={1}>
              <DayPicker jour={jour} />
            </Col>
            <DoubleDatePicker date1={dateDebut} date2={dateFin} />
          </Row>
          <MarginTop />
          <Graph data={chartInfo} />
          <MarginTop />
        </Container>
      </Layout>
    </>
  );
}
