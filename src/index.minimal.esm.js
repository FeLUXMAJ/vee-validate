import Validator from './core/validator';
import directive from './directive';
import mixin from './mixin';
import install from './install';
import use from './use';
import ErrorBag from './core/errorBag';
import mapFields from './core/mapFields';
import { ValidationProvider } from './components';

const version = '__VERSION__';

export {
  install,
  use,
  directive,
  mixin,
  mapFields,
  Validator,
  ErrorBag,
  version,
  ValidationProvider
};

export default {
  install,
  use,
  directive,
  mixin,
  mapFields,
  Validator,
  ErrorBag,
  ValidationProvider,
  version
};
