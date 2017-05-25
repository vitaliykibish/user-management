import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styleBtn = {
  margin: 12,
};

const FilterUser = ({ query, search, clearSearch }) => {
  const handleFildChange = (e) => {
    const { value } = e.target;

    search(value);
  }

  const showClearBtn = !query.length;

  return (
    <div>
      <TextField
        name="query"
        value={query}
        autoFocus={true}
        onChange={handleFildChange}
        hintText="Search user ..." />
      <RaisedButton
        label="clear"
        secondary={true}
        disabled={showClearBtn}
        style={styleBtn}
        onTouchTap={clearSearch} />
    </div>
  );
}

export default FilterUser;
