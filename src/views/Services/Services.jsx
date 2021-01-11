import React from 'react';
import './Services.css';
import { services } from '../../assets/db.json';
const Services = () => {
  return (
    <section id='services' className='services'>
      <div className='services-container'>
        <h1>Servicios</h1>
        <div className='service-cards-wrapper'>
          {services.map((service, index) => (
            <div className='service-card' key={index}>
              <div className='icon-container'>
                {/* <img src={`../../assets/images/svgs/${service.icon}`} alt='' /> */}
                <img src={service.icon} alt='' />
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
