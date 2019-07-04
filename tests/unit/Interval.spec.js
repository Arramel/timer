import { mount } from '@vue/test-utils';
import Interval from '../../src/components/Interval';

describe('Interval', () => {
    const wrapper = mount(Interval);

    it(wrapper.html()).toMatchSnapshot();
});