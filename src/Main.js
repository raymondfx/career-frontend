import React from 'react';
import ApolloClient from 'apollo-client';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-apollo';

import EmployerList from './components/employer/EmployerList';

const  client = new ApolloClient({});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <EmployerList/>
        </ApolloProvider>
    );
};