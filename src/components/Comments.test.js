import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import Comments from './Comments';
import { useParams } from 'react-router-dom';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('Comments', () => {
  it('renders correctly', () => {
    useParams.mockReturnValue({ postId: '1' });
    useSelector.mockReturnValue({
      comments: [{ id: '1', body: 'Test Comment' }],
      status: 'succeeded',
      error: null,
    });

    const wrapper = shallow(<Comments />);
    expect(wrapper.find('.comment').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
