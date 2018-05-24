import Utils from '../utils/utils';
import Mixins from '../utils/mixins';

export default {
  props: {
    id: [String, Number],
    ...Mixins.colorProps,
  },
  name: 'f7-accordion-content',
  render() {
    const classes = Utils.classNames(
      this.props.className,
      {
        'accordion-item-content': true,
      },
      Mixins.colorClasses(this),
    );
    return (
      <div id={this.props.id} style={this.props.style} className={classes}>
        <slot />
      </div>
    );
  },
};