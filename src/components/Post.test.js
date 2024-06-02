import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Post from './Post';

describe('Post', () => {
  it('renders correctly', () => {
    const post = { id: '1', title: 'Test Post', selftext: 'Test Content' };
    const wrapper = shallow(<Post post={post} />);
    expect(wrapper.find(Link).prop('to')).toEqual('/post/1');
    expect(wrapper.find('h3').text()).toEqual('Test Post');
    expect(wrapper.find('p').text()).toEqual('Test Content');
    expect(wrapper).toMatchSnapshot();
  });
});
