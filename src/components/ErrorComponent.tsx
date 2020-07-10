import React from 'react';

interface Props {
  errorMessage: string;
}

export default function(props: Props) {
  return <div className='row'>
    <div className='alert alert-primary' role='alert'>
      {props.errorMessage}
    </div>
  </div>;
}