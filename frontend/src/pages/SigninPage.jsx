import { useLocation, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

export default function SigninPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post('/api/users/signin', {
        email,
        password,
      });
      console.log('Data', data);
    } catch (err) {}
  };

  return (
    <Container className="small-container">
      <title>Sign in</title>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3" controlId="email">
          <Button type="submit">Signin</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create account.</Link>
        </div>
      </Form>
    </Container>
  );
}
