import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Root } from './Root';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(<Root />);
