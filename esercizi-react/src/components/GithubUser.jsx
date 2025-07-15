import React from 'react';
import { useParams } from 'react-router-dom';
import GithubUser from './GithubUser';

function ShowGithubUser() {
// Use useParams to get the username from the URL parameters
  const { username } = useParams();
  return <GithubUser username={username} />;
}

export default ShowGithubUser;
