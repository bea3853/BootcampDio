import React from "react";
import { Row, Col, Button } from "reactstrap";

export default props => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center assento-cta">
        <Col>
          <p className="looking-for-assento">
   Escolha data, o horário e o local:
            <i className="fas fa-assento assento-slice"></i>
          </p>
          <Button
            color="none"
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Reservas
            
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={require("../images/aviao.png")}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};
