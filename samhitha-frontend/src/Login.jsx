
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/signup', data); 
      console.log(response.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username', { required: true })} placeholder="Username" />
      {errors.username && <span>This field is required</span>}
      <input {...register('password', { required: true, minLength: 6 })} placeholder="Password" type="password" />
      {errors.password && <span>Password must be at least 6 characters</span>}
      <button type="submit">Signup</button>
    </form>
  );
}