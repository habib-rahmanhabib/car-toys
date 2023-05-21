import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-2 gap-5 '>

            <div className='shadow p-4'>
                <h3 className=' text-lime-400 text-lg'><span className='text-purple-400 text-2xl'>Question:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>

                <p className='text-green-400 text-2xl'>Anser:</p>
                <p><span className='text-1xl text-blue-500 font-semibold'>Access Token:</span>
                    An access token is a credential that is issued by an authentication server after a user successfully authenticates. It is typically a string of characters that represents the user's identity and permissions. The access token is included in each request to the server to access protected resources, allowing the server to verify the user's identity and authorize the requested actions.
                </p>

                <p> <span className='text-1xl text-blue-500 font-semibold'>Refresh Token:</span>
                    A refresh token is a long-lived credential that is also issued by the authentication server during the initial authentication process. Its purpose is to obtain a new access token without requiring the user to re-authenticate. When the access token expires, the client can use the refresh token to request a new access token from the authentication server.
                </p>
            </div>
            <div className='shadow p-4'>
                <h3 className=' text-lime-400 text-lg'><span className='text-purple-400 text-2xl'>Question:</span>Compare SQL and NoSQL databases?</h3>

                <p className='text-green-400 text-2xl'>Anser:</p>
                <p><span className='text-1xl text-blue-500 font-semibold'> SQL Databases:</span>


                    Structure: SQL databases are based on a rigid, predefined schema that determines the structure of the data. Tables with fixed columns and data types are used to organize and store data.
                    Data Model: SQL databases follow the relational data model, representing data as tables with rows and columns. Relationships between tables are established using keys (primary and foreign keys).

                </p>

                <p> <span className='text-1xl text-blue-500 font-semibold'>NoSQL Databases:</span>


                    Structure: NoSQL databases are schema-less or have flexible schemas, allowing for dynamic and evolving data structures. They can handle unstructured, semi-structured, and structured data.
                    Data Model: NoSQL databases support various data models such as key-value, document, columnar, and graph. This flexibility enables efficient handling of different types of data and diverse use cases.

                </p>
            </div>
            <div className='shadow p-4'>
                <h3 className=' text-lime-400 text-lg'><span className='text-purple-400 text-2xl'>Question:</span> What is express js? What is Nest JS?</h3>

                <p className='text-green-400 text-2xl'>Anser:</p>
                <p><span className='text-1xl text-blue-500 font-semibold'>  Express.js:</span>

                    Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and straightforward approach to building web applications and APIs. Express.js focuses on being lightweight and unopinionated, allowing developers to have fine-grained control over the application structure and middleware usage.
                </p>

                <p> <span className='text-1xl text-blue-500 font-semibold'> Nest.js:</span>

                    Nest.js is a progressive, opinionated framework for building scalable and maintainable server-side applications using TypeScript. It is built on top of Express.js but adds several additional features and architectural patterns inspired by Angular, making it suitable for larger enterprise applications.
                </p>
            </div>
            <div className='shadow p-4'>
                <h3 className=' text-lime-400 text-lg'><span className='text-purple-400 text-2xl'>Question:</span> What is MongoDB aggregate and how does it work?</h3>

                <p className='text-green-400 text-2xl'>Anser:</p>
                <p><span className='text-1xl text-blue-500 font-semibold'>MongoDB:</span>
                    n MongoDB, the aggregate function is used to perform advanced data processing and aggregation operations on the documents in a collection. It allows you to transform, filter, group, and analyze data using a pipeline of stages.

                    The aggregate function takes an array of pipeline stages as its parameter. Each stage in the pipeline performs a specific operation on the documents and passes the result to the next stage. The stages are executed in sequence, allowing you to build complex aggregation queries.
                </p>


            </div>
        </div>
    );
};

export default Blogs;