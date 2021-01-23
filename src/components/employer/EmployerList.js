import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from '@apollo/client';


class EmployerList extends Component {
    render() {
        console.log(this.props);
        return ( 
        <div>
            EmployerList
        </div>
        );
    }

}

const query = gql;

export default graphql(query)(EmployerList);