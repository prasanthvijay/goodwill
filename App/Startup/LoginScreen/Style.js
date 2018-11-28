import { StyleSheet} from 'react-native';
import { METRICS } from '../../config/Metrics';
// import  COLORS  from '../../config/Colors';

export default StyleSheet.create({
    container : {
        flex: 1,
    },
    Tab: {
        flex: 1,
        width: METRICS.screenWidth/1.5,
        alignSelf: 'center',
        position: 'absolute',
        height: METRICS.screenHeight/2,
    },
    scene: {
        flex: 1,
    },
    linearGradient:{
        width: '100%',
        height: '100%',
    }
});