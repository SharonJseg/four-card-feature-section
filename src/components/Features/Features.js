import React from 'react';
import './Features.css';

import Card from '../Card/Card';

const Features = () => {
  return (
    <section className='features'>
      <h2 className='features__header'>
        Reliable, efficient delivery
        <span className='features__header-bold'>Powered by Technology</span>
      </h2>
      <p className='features__text'>
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>
      <ul className='features__card-list'>
        <Card
          title='Supervisor'
          text='Monitors activity to identify project roadblocks'
          color='cyan'
          name='super'
        />
        <div className='card__wrapper'>
          <Card
            title='Team Builder'
            text='Scans our talent network to create the optimal team for your  project'
            color='red'
            name='team'
          />
          <Card
            title='Karma'
            text='Regularly evaluates our talent to ensure quality'
            color='orange'
            name='karma'
          />
        </div>
        <Card
          title='Calculator'
          text='Uses data from past projects to provide better delivery estimates'
          color='blue'
          name='calc'
        />
      </ul>
    </section>
  );
};

export default Features;
