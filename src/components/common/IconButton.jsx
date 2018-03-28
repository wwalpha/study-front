import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

const style = () => ({
  root: {
    width: '32px',
    height: '32px',
  },
});

export default withStyles(style)(IconButton);
