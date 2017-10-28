import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('should display a text input to fill question', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it('should display a submit button to send question to the Internet Gods', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('button[type="submit"]').length).toBe(1);
});

it('should not display any answer by default', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.answer').length).toBe(0);
});

it('should display Internet Gods answer in both text and picture format', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
        answer: {
            answer: 'no',
            forced: false,
            image: 'https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif',
        },
    });

    const answer = wrapper.find('.answer');
    expect(answer.find('h1').text()).toBe('no');
    expect(answer.find('img').prop('src')).toBe('https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif');
});
