import React from 'react';
import './Services.css';
import { services } from './Services.js';
const Services = () => {
  return (
    <section id='services' className='services'>
      Servicios
      <div className='services-container'>
        <h1></h1>
        <div className='service-cards-wrapper'>
          {services.map((service, index) => (
            <div className='service-card' key={index}>
              <div className='icon-container'>
                <i className={service.icon}></i>
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
