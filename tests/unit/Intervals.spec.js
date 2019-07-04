import { mount } from '@vue/test-utils';
import Intervals from '../../src/components/Intervals';

describe('Intervals', () => {
    const wrapper = mount(Intervals);

    const intervalsNum = wrapper.findAll('.interval').length;

    wrapper.find('button').trigger('click');

    it('adds new interval', () => {
        expect(wrapper.findAll('.interval').length).toBeGreaterThan(intervalsNum);
    })
});