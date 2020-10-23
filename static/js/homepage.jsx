"use strict";

function Homepage() {
  return (
    <div>
      Welcome! 
      <a href='/cards'>Click here for trading cards</a>
      <img src='/static/img/balloonicorn.jpg'></img>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
