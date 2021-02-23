import React from 'react';

interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser;
}

// function component
const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br />
      <strong>Email: </strong> {user.email || 'não possui email'} <br /> <br />
    </div>
  )
}

export default User;