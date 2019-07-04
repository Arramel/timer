import { mount } from '@vue/test-utils';
import DisplayCircle from '../../src/components/DisplayCircle'

describe('DisplayCircle', () => {

  const draw = jest.fn();
  const wrapper = mount(DisplayCircle, {
    propsData: {
      drawing: true,
      draw
    }
  });


  it('Has a canvas if drawing == true', () => {
    expect(wrapper.contains('canvas')).toBe(true);
  });

  it('Called draw function if drawing == true', () => {
    expect(draw).toHaveBeenCalled();
  });


})