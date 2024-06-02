import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import PostList from './PostList';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('PostList', () => {
  it('renders correctly', () => {
    useSelector.mockReturnValue({
      posts: [{ id: '1', title: 'Test Post', selftext: 'Test Content' }],
      status: 'succeeded',
      error: null,
    });
    const wrapper = shallow(<PostList />);
    expect(wrapper).toMatchSnapshot();
  });
});
