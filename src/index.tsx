import React from 'react';
import { createRoot } from 'react-dom/client'
import { App } from './test-environment/test-environment';

const root = createRoot( document.getElementsByTagName('App')[0] )
root.render( <App/> )


