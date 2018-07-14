import Controller from '@ember/controller';
import { gte, match, and, not } from '@ember/object/computed';

export default Controller.extend({

    isEmailInvalid: match('emailAddress', /^.+@.+\..+$/),
    isLongEnough: gte("message.length", 5), 

    isValid: and('isEmailInvalid', 'isLongEnough'),
    isInvalid: not('isValid'),

    actions: {

        saveInvitation() {
            const email = this.get('emailAddress')
            const message = this.get('emailAddress')

            const saveContact = this.store.createRecord('contact', { email, message })
            saveContact.save()
                .then(() => {
                    this.set('responseMessage', `We got your message and we’ll get in touch soon`)
                    this.set('emailAddress', '')
                    this.set('message', '');
                })
        }
    }

});
