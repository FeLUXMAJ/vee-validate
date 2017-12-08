import mixin from './mixin';
import directive from './directive';
import Config from './config';
import Validator from './core/validator';
import { warn } from './core/utils';

let Vue;

function install (_Vue, options = {}) {
  if (Vue) {
    warn('already installed, Vue.use(VeeValidate) should only be called once.');
    return;
  }

  Vue = _Vue;
  Config.merge(options);
  const { locale, dictionary, i18n } = Config.current;

  if (dictionary) {
    Validator.localize(dictionary); // merge the dictionary.
  }

  if (i18n) {
    i18n._vm.$watch('locale', () => {
      Validator.regenerate();
    });
  }

  Validator.localize(locale); // set the locale
  Validator.setStrictMode(Config.current.strict);

  Vue.mixin(mixin);
  Vue.directive('validate', directive);
};

export default install;
