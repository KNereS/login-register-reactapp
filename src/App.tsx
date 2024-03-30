import './App.css';
import './style.css'

import Hero from './assets/hero.png'

function PageTitle() {
  return(
    <div className='pageTitle'>

      <h1>
        Sign In to <br />
        <span>Lorem Ipsum is simply!</span>
      </h1>

      <p>
        If you don’t have an account register, <br />
        You can <a href="#">Register Here!</a>
      </p>

      <img src={Hero} />

    </div>
  );
};

export default PageTitle;