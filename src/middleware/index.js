import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger';

const composeEnhancer = compose;

export default composeEnhancer(applyMiddleware(thunk, logger));
