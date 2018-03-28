import Radio from 'material-ui/Radio';
import { withStyles } from 'material-ui/styles';

const style = () => ({
  default: {
    width: '32px',
    height: '32px',
  },
});

export default withStyles(style)(Radio);
