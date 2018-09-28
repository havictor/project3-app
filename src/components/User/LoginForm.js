import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Login</h2>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            name="email"
            onChange={onChange}
            value={user.email}
          />
        <FormHelperText error id="component-error-text">{errors.email}</FormHelperText>
        </FormControl>

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">password</InputLabel>
          <Input
            name="password"
            type="password"
            onChange={onChange}
            value={user.password}
          />
        <FormHelperText error id="component-error-text">{errors.password}</FormHelperText>
        </FormControl>

        <Button type="submit"          
        fullWidth
        variant="raised"
        color="primary">
        Login
        </Button>
        
        Don't have an account? <Link to={'/signup'}>Create one</Link>.
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
