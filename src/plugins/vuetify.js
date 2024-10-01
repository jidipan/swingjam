import { createVuetify } from 'vuetify';
import 'vuetify/styles';  // 引入基本样式
import { aliases, mdi } from 'vuetify/iconsets/mdi';  // 如果使用 Material Icons

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
