
import ReactDOM from 'react-dom';
import React from 'react'
import registerServiceWorker from './registerServiceWorker';

import Character from './Character/Character';

ReactDOM.render(<Character/>, document.getElementById('root'));
registerServiceWorker();
