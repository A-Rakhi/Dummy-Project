import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const PostDetails = () => {

  const history = useHistory();
  const [data, setData] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <Container className="py-4">
        <img
          src="https://images.pexels.com/photos/7245226/pexels-photo-7245226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="icon"
          className="imgg"
        />
        <div className="title my-3">{data.title}</div>
        <div className="post-body my-3">{data.body}</div>
        <Button onClick={handleClick}>Go Back</Button>
      </Container>
    </>
  );
};

export default PostDetails;
