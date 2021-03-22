import React from 'react';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { InMemoryCache } from "apollo-cache-inmemory";


import { EmployerInfo } from '../components/employer/EmployerList'

import  CreateEmployer  from '../components/employer/EmployerList';

import Student from '../components/Student/Student';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', // your GraphQL Server 
  cache: new InMemoryCache(),
});

const Employer = () => (
  <ApolloProvider client={client}>
    <div style={{
      backgroundColor: '#00000008',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      height: '100vh',
      flexDirection: 'column',
    }}>
      <h2>My first Apollo app <span role="img" aria-label="rocket">🚀</span></h2>
    
      <CreateEmployer/>
      <EmployerInfo/>
      <Student name = "Dennis" age = "26"/>
      <Student name = "Anne" age = "27">My Hobby is to Race Jeebs</Student>
      <Student name = "Julius" age = "21" />
    </div>
  </ApolloProvider>
);
export default Employer;