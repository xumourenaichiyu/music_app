import axios from 'axios';
import { Component ,PureComponent} from 'react';
axios.defaults.baseURL='http://106.52.80.66:3000';
Component.prototype.$axios = axios;
PureComponent.prototype.$axios = axios
