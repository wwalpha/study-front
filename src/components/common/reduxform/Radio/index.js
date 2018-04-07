import { withStyles } from 'material-ui/styles';
import RadioUI from 'material-ui/Radio';
import RadioStyles from '../../Radio/RadioStyles';
import RadioGroupUI from './RadioGroup';
import RadioGroupStyles from '../../Radio/RadioGroupStyles';

export default withStyles(RadioStyles)(RadioUI);
export const RadioGroup = withStyles(RadioGroupStyles)(RadioGroupUI);
