import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function TableRow() {
    return (
        <Row style={{ padding: "0rem 0.7rem 0rem 1.5rem", }}>
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
    )
}
export default TableRow