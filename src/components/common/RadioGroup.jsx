import { withStyles } from 'material-ui/styles';
import RadioGroup from './reduxform/RadioGroup';

const style = () => ({
  root: {
    flexDirection: 'row',
  },
});

export default withStyles(style)(RadioGroup);
