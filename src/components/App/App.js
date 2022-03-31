import './App.css';
import icon from '../../images/icon-team-builder.svg';

const App = () => {
  return (
    <div className='page'>
      <section className='features'>
        <h1 className='features__header'>
          Reliable, efficient delivery
          <span className='features__header-bold'>Powered by Technology</span>
        </h1>
        <p className='features__text'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <ul className='features__card-list'>
          <li>
            <article className='card'>
              <div className='card__stripe'></div>
              <h3 className='card__title'>Team Builder</h3>
              <p className='card__text'>
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img src={icon} alt='team builder' className='card__icon' />
            </article>
          </li>
          <div className='card__wrapper'>
            <li>
              <article className='card'>
                <div className='card__stripe'></div>
                <h3 className='card__title'>Team Builder</h3>
                <p className='card__text'>
                  Scans our talent network to create the optimal team for your
                  project
                </p>
                <img src={icon} alt='team builder' className='card__icon' />
              </article>
            </li>
            <li>
              <article className='card'>
                <div className='card__stripe'></div>
                <h3 className='card__title'>Team Builder</h3>
                <p className='card__text'>
                  Scans our talent network to create the optimal team for your
                  project
                </p>
                <img src={icon} alt='team builder' className='card__icon' />
              </article>
            </li>
          </div>
          <li>
            <article className='card'>
              <div className='card__stripe'></div>
              <h3 className='card__title'>Team Builder</h3>
              <p className='card__text'>
                Scans our talent network to create the optimal team for your
                project
              </p>
              <img src={icon} alt='team builder' className='card__icon' />
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
