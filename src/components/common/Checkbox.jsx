import { withStyles } from 'material-ui/styles';
import Checkbox from './reduxform/Checkbox';

const style = () => ({
  default: {
    width: '32px',
    height: '32px',
  },
});

export default withStyles(style)(Checkbox);
