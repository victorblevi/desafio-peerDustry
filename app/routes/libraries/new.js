// app/routes/libraries/new.js
import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('library');
  },

  actions: {

    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
        let model = this.controller.get('model');
      
        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
  }
});