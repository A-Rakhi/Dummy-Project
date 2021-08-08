import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

function AddProductForm() {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // const [items, setItems] = useState({});

  // useEffect(() => {
  //   const details = { title, body };
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/posts', details)

  //     .then((response) => console.log(response.data));

  //   localStorage.setItem('items', JSON.stringify(items));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body,
        userId: 1,
      })
      .then(function (response) {
        response.status === 201 &&
          alert(
            `Post successfully created, Title: ${title}, Body: ${body}, UserId: 1`
          );
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log({ title, body });
  };

  return (
    <div className="container mx-auto ">
      <Form onSubmit={handleSubmit} className="col-md-6 col-10 mx-auto my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Body</Form.Label>
          <Form.Control
            value={body}
            onChange={(e) => setBody(e.target.value)}
            as="textarea"
            rows={3}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New Item
        </Button>
      </Form>
    </div>
  );
}
export default AddProductForm;
