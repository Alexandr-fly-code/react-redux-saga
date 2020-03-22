import React from 'react';

import { fetchData } from '../store/fetchComponent/actions';

import { connect } from 'react-redux';

const FetchComponent = ({ fetchData }) => {
  return (
    <div>
      <button type='button' onClick={fetchData}>Fetch</button>
    </div>
  );
};

const MDTP = {
  fetchData
};

export default connect(null, MDTP)(FetchComponent);