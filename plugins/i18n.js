import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default({app, store}) => {
  let locale = store.state.locale;
  // let locale = 'en';
  app.i18n = new VueI18n({
    locale: locale,
    fallbackLocale: locale,
    messages: {
      en: require('~/locales/en.json'),
      zh: require('~/locales/zh.json')
    }
  });

  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }

    return `/${app.i18n.locale}/${link}`;
  };
};

