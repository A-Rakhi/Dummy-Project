import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Alert } from 'bootstrap';

const Post = (props) => {
  // console.log();

  const { title, body, id } = props.post;

  const handleDelete = (postId) => {
    console.log(postId);
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(function (response) {
        response.status === 200 &&
          alert(`Post successfully deleted, Post id: ${postId}`);
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="col-md-4 col-sm-6 my-4 d-flex justify-content-center">
        <Card
          style={{ width: '19rem', border: 'none' }}
          className="shadow post-card"
        >
          <Card.Body>
            <Link to={`post/${id}`}>
              <img
                src="https://images.pexels.com/photos/7245226/pexels-photo-7245226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="icon"
                className="img"
              />
            </Link>
            <Card.Title className="mt-2 fw-bold text-center">
              {title.slice(0, 10)}
            </Card.Title>
            <Card.Text className="text-justify">{body}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button
              onClick={() => handleDelete(id)}
              className=" px-5 text-white btn bg-danger border-none"
            >
              Delete
            </button>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Post;
