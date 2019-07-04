import { mount } from '@vue/test-utils';
import Start from '../../src/components/Start';

describe('Start', () => {
    const wrapper = mount(Start);

    wrapper.find('button').trigger('click');

    it('triggers start when clicked', () => {
        expect(wrapper.emitted.start).toBeDefined();
    })

});