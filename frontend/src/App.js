import './App.css';
import axios from "axios"
import SideNavBar from './components/SideNavBar/SideNavBar';
// import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map/Map';
import React, { useState, useEffect } from 'react';
// import TableRow from './components/TableRow'
// import GetData from './components/displayTable/DisplayTableUi';

function App() {
  const [tableInstance, setTableInstance] = useState([]);

  const fetchRowForTable = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/products`)
      setTableInstance(response.data)
      console.log(tableInstance)
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchRowForTable()
  }, []);

  // const fetchRowForTable = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/products`
  //     )
  //     setTableInstance(response.data)
  //     console.log(tableInstance)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  // const fetchRowForTable = () => {
  //   fetch("http://localhost:5000/products")
  //     .then((response) => {
  //       const contentType = response.headers.get('content-type');
  //       if (!contentType || !contentType.includes('application/json'))
  //         throw new TypeError("Oops, we haven't got JSON!");
  //       setTableInstance(response.json());
  //     })
  //     .then(() => {
  //       console.log("No JSON received.")
  //     })
  //     .catch((error) => console.error(error));
  //   console.log(tableInstance)
  // }

  return (
    <Container fluid style={{ alignContent: "flex-start", justifyContent: "center", height: "100vh", width: "100%" }}>
      <Row style={{ display: "flex", width: "100vw", margin: "0" }}>
        <Col className="col-9 col-sm-9 col-md-9 col-lg-10" style={{ position: "relative" }}>
          <Row style={{ display: "flex", gap: "1.5rem", padding: "1.5rem 0.7rem 0rem 1.5rem", height: "max-content" }}>
            <Col style={{ display: "flex", border: "0.1rem solid darkseagreen", borderRadius: "0.5rem", backgroundColor: "#E4FFDA", width: "max-content", height: "max-content", padding: "1rem", justifyContent: "center" }}>
              {/* <span>Hello</span> */}
              <Map />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", display: "flex", gap: "1.5rem", padding: "1.5rem 0.7rem 0rem 1.5rem" }}>
            <Col style={{ backgroundColor: "gray", width: "max-content", height: "8rem", padding: "1.5rem" }}>
              <span>Hello</span>
            </Col>
            <Col style={{ backgroundColor: "aqua", width: "max-content", height: "8rem", padding: "1.5rem" }}>
              <span>Hello</span>
            </Col>
            <Col style={{ backgroundColor: "teal", height: "8rem" }}>
              <span>Hello</span>
            </Col>
          </Row>
          <Row style={{ padding: "1.5rem 0.7rem 0rem 1.5rem", }}>
            <Col className="warePackInfoTable">
              <Row style={{ backgroundColor: "purple", padding: "1rem" }}>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Package No.</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }} >
                  <span style={{ padding: "0.5rem" }}>Package Name</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Quantity</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Health</span>
                </Col>
              </Row>
            </Col>
          </Row>

          {tableInstance.map((item, index) => (
            <tr key={index}>
              <td>{item.product_name}</td>
              <td>{item.selling_price}</td>
              <td>{item.date_of_entry}</td>
              <td>{item.date_of_exit}</td>
              <td>{item.date_of_expiry}</td>
              <td>{item.quantity}</td>
              <td>{item.cost_price}</td>
            </tr>
          ))};
          {/* <Row style={{ padding: "0rem 0.7rem 0rem 1.5rem", }}>
            <Col className="warePackInfoTable">
              <Row style={{ backgroundColor: "purple", padding: "1rem" }}>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Package No.</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }} >
                  <span style={{ padding: "0.5rem" }}>Package Name</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Quantity</span>
                </Col>
                <Col style={{ backgroundColor: "red", display: "flex", justifyItems: "center" }}>
                  <span style={{ padding: "0.5rem" }}>Health</span>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </Col>
        <Col className="col-3 col-sm-3 col-md-3 col-lg-2" style={{ position: "absolute", right: "0", backgroundColor: "gray", height: "max-content", padding: "1.5rem" }}>
          <SideNavBar />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
