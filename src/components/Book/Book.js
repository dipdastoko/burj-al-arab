import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Book = () => {
    const { bedType } = useParams();
    return (
        <div style={{ textAlign: 'center' }}>
            {bedType
                ?
                <span>
                    <h1>Let's book a {bedType} Room.</h1>
                    <p>Want a <Link to="/home">different room?</Link> </p>
                </span>
                :
                <h1>Please Book a Room</h1>
            }
        </div>
    );
};

export default Book;