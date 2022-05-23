import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

// eslint-disable-next-line
const locale = window.location.pathname.replace(/^\/([^\/]+).*/i, "$1");

const defaultLocale = "en";

const messages = {
  en: {
    message: {
      hello: "hello world"
    }
  },
  ja: {
    message: {
      hello: "こんにちは、世界"
    }
  }
};

const i18n = new VueI18n({
  locale: locale.trim().length && locale != "/" ? locale : defaultLocale,
  fallbackLocale: "en",
  messages
});

export default i18n;
