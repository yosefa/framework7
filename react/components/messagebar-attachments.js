import React from 'react';
import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __reactComponentSlots from '../runtime-helpers/react-component-slots.js';
import __reactComponentSetProps from '../runtime-helpers/react-component-set-props.js';
class F7MessagebarAttachments extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const classes = Utils.classNames(this.props.className, 'messagebar-attachments', Mixins.colorClasses(this));
    return React.createElement('div', {
      id: this.props.id,
      style: this.props.style,
      className: classes
    }, this.slots['default']);
  }
  get slots() {
    return __reactComponentSlots(this);
  }
}
__reactComponentSetProps(F7MessagebarAttachments, Mixins.colorProps);
export default F7MessagebarAttachments;