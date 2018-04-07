import { withStyles } from 'material-ui/styles';
import RadioUI, { RadioGroup as RadioGroupUI } from 'material-ui/Radio';
import RadioStyles from './RadioStyles';
import RadioGroupStyles from './RadioGroupStyles';

export default withStyles(RadioStyles)(RadioUI);
export const RadioGroup = withStyles(RadioGroupStyles)(RadioGroupUI);
