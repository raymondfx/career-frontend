import React, { useState }  from 'react';
import { useQuery } from '@apollo/client';
import { gql , useMutation } from '@apollo/client';

const QUERY_EMPLOYERS = gql`
{
    allEmployers{
      edges{
        node{
          id
          employerId
          employerName
          description
          email
          phone
          
        }
      }
    }
  }
`;

const CREATE_EMPLOYER = gql`
mutation createEmployer ( $employerId: String!, $employerName: String!, $description: String!, $email: String!, $phone: String!, $website: String!){
    createEmployer ( input: {employerId: $employerId, employerName: $employerName, description: $description, email: $email, phone: $phone, website: $website }){
      employer{
          employerId
          employerName
          description
          email
          phone 
          website
        }
      }
    }
`;
function CreateEmployer() {
  const [employerId, setEmployerId] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const [createEmployer, { error }] = useMutation(CREATE_EMPLOYER);

  const addEmployer = () => {
    createEmployer({
      variables: {
        employerId: employerId,
        employerName: employerName,
        email: email,
        description: description,
        phone: phone,
        website: website,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="employerId"
        onChange={(e) => {
          setEmployerId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="EmployerName"
        onChange={(e) => {
          setEmployerName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="website"
        onChange={(e) => {
          setWebsite(e.target.value);
        }}
      />
      <button onClick={addEmployer}> Create Employer</button>
    </div>
  );
}

export default CreateEmployer;



export function EmployerInfo() {
  const { data, loading } = useQuery(QUERY_EMPLOYERS, { pollInterval: 500 });

  if (loading) return <p>Loading...</p>;

  const employers = data.allEmployers.edges;

  return(
      <div>
        { employers.map( employer => {
          return <p key={employer.node.id}> Employer -  {employer.node.employerId} {employer.node.employerName} {employer.node.email} {employer.node.phone} {employer.node.logo} </p>
        })}
      </div>
  );
}
