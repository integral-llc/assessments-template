import React from 'react';

interface Props {
  message?: string;
}

export default function(props: Props) {
  return <div className='row'>
    <div className="col-3"/>
    <div className="col-6">
      <div className="alert alert-info">
        {props.message || 'Loading...'}
      </div>
    </div>
  </div>;
}

