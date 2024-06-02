import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('SearchBar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch on form submission', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const wrapper = shallow(<SearchBar />);
    wrapper.find('input').simulate('change', { target: { value: 'reactjs' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    expect(dispatch).toHaveBeenCalled();
  });
});
