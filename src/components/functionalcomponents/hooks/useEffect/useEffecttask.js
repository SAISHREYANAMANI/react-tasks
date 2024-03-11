import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';

const UseEffectTask = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [count]);

  const fetchData = async () => {
    try {
      const result = await axios.get(`https://dummyjson.com/products/${count}`);
      console.log("Fetched data:", result.data);
      setData(result.data); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)} style={{backgroundColor:"blue",padding:"5px", borderRadius:"12px 16px", color: "white", marginTop:"50px", marginLeft:"150px"}}> See more Products</button>
      {data.length === 0 ? (
        <Spinner/>
      ) : (
        
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Card  style={{ border: "2px solid dark",width: '18rem', margin:"mx-auto", backgroundColor:"primary"}}>
          <Card.Img variant="top" src={data.images[0]} />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
             {data.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item><h5>BRAND: </h5>{data.brand}</ListGroup.Item>
            <ListGroup.Item><h5>CATEGORY</h5>{data.category}</ListGroup.Item>
            <ListGroup.Item><h5>PRICE</h5>₹{data.price}</ListGroup.Item>
            <ListGroup.Item><h5>STOCK</h5>{data.stock}</ListGroup.Item>
            <ListGroup.Item><h5>RATING</h5>{data.rating}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href={data.thumbnail}>Product Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
        
      )}
    </>
  );
};

export default UseEffectTask;
