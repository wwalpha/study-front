import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Add from 'material-ui/svg-icons/content/add-circle';
import Minus from 'material-ui/svg-icons/content/remove-circle';
import Multiply from 'material-ui/svg-icons/navigation/cancel';
import Checkbox from 'root/components/customize/XCheckbox';

import css from 'styles/calc/multigroup.css';
import comCss from 'styles/common.css';

class MultiGroup extends Component {

  render() {
    return (
      <div className={css.container}>
        <Checkbox
          className={css.checkbox}
          checkedIcon={<Add className={comCss.icon} />}
          uncheckedIcon={<Add className={comCss.icon} />}
        />
        <Checkbox
          className={css.checkbox}
          checkedIcon={<Minus className={comCss.icon}/>}
          uncheckedIcon={<Minus className={comCss.icon}/>}
        />
        <Checkbox
          className={css.checkbox}
          checkedIcon={<Multiply className={comCss.icon}/>}
          uncheckedIcon={<Multiply className={comCss.icon}/>}
        />
      </div>
    );
  }
}

MultiGroup.props = {
};

export default MultiGroup;
