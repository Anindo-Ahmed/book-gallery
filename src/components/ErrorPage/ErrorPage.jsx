import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!</h2>
            <Link to="/"><Button>Go to Home</Button></Link>
        </div>
    );
};

export default ErrorPage;