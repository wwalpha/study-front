import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'styles/calc/firstgrade/june01.css';
import XLabel from 'calc/common/XLabel';
import NumInput from 'calc/common/NumInput';

/**
 *  小学校１年生４月ー増えるといくつ
 */
class June01 extends Component {

  render() {
    // const question = ObjectUtils.strFormat()

    return (
      <div className={css.container}>
        <div className={css.left}>
          {this.props.question}
        </div>
        <div className={css.right}>
          <div className={css.title}>
            <XLabel title="しき" />
          </div>
          <div className={css.formula}>
            <NumInput width="160px" ref={(answer1) => { this.answer1 = answer1; }} />
          </div>
          <div className={css.title}>
            <XLabel title="こたえ" />
          </div>
          <div className={css.formula}>
            <NumInput width="80px" ref={(answer2) => { this.answer2 = answer2; }}/>
          </div>
        </div>
      </div>
    );
  }
}

June01.props = {
  // question: PropTypes.string,
  answer: PropTypes.func,
};

export default June01;
