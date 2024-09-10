import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  /* useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []); */
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Table</Heading>
        <p>test</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
