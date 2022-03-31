import React from 'react';
import './Card.css';
import Icon from '../Icon/Icon';

const Card = ({ title, text, color, name }) => {
  return (
    <li>
      <article className='card'>
        <div className={`card__stripe ${color}`}></div>
        <h3 className='card__title'>{title}</h3>
        <p className='card__text'>{text}</p>
        <Icon name={name} height='64' width='64' className='card__icon' />
      </article>
    </li>
  );
};

export default Card;
