import React from 'react';
import { useParams } from 'react-router-dom';

import servicesData from './servicesData';

function ServiceDetail() {
    const { serviceId } = useParams();
    // AJAX Call
    const thisService = servicesData.find((service) => service._id === serviceId);

    return (
        <>
            <h1>Service Detail Page</h1>
            <h3>
                {thisService.name} - ${thisService.price}
            </h3>
            <p>{thisService.description}</p>
        </>
    );
}

export default ServiceDetail;
