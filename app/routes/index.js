import Route from '@ember/routing/route';
import { later } from '@ember/runloop';

export default Route.extend({
  model() {
    later(() => {}, 200000);
    return {};
  }
});
