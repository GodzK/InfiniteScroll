import * as React from 'react';
import './PhotoComponents.css'

const PhotoComponent = ({ title, description, url, types, topics, levels }) => {
  const handleClick = () => {
    window.location.href = url;
  };
  return (
        <div className="card">
    <div className="card-header"><h1>{description}</h1></div>
    <div className="card-body">
        <h2>{title}</h2>
        <h2>Types: {types.join(', ')}</h2>
        <h2>Topics: {topics.join(', ')}</h2>
        <h2>Levels : {levels.join(', ')}</h2>
        <button className='button-86' onClick={handleClick}>
              Learn More
          </button>
    </div>
</div>

  );
}

export default PhotoComponent;
