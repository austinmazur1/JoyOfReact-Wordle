import React from 'react';

function GuessComponent({letter}) {
  return (<div className='guess-results'>
    <p className='guess'>
      <span className='cell'>{letter}</span>
    </p>
  </div>);
}

export default GuessComponent;
