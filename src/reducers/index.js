import { combineReducers } from 'redux';
import appReducer from 'reducers/appReducer';
import colorReducer from 'reducers/colorReducer';
import styleReducer from 'reducers/styleReducer';
import { reducer as formReducer } from 'redux-form';
import palettesReducer from 'reducers/palettesReducer';
import authReducer from 'reducers/authReducer';

const rootReducer = combineReducers({
 palette: colorReducer,
 app: appReducer,
 form: formReducer,
 styles: styleReducer,
 db: palettesReducer,
 auth: authReducer
});

export default rootReducer;
