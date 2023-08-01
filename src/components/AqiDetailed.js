import React from 'react';
import PropTypes from 'prop-types';

const AqiDetailed = ({ dataname, data }) => {
  const parsedName = React.createElement('div', { dangerouslySetInnerHTML: { __html: dataname } });
  return (
    <div className="data-component-wrap">
      <div className="data-component-name">
        {parsedName}
      </div>
      <div className="data-component">
        {data}
      </div>
    </div>
  );
};

AqiDetailed.propTypes = {
  dataname: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default AqiDetailed;
