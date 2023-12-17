import * as Sentry from '@sentry/electron/renderer';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { Root } from './Root';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(<Root />);
