import Vue from 'vue'
import Hello from 'src/components/Hello'

describe('Test Hello.vue', () => {
  const vm = new Vue(Hello).$mount();

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to VueFire6Pack App (Vue + VueFire + ES6 + Webpack)')
  });
});
