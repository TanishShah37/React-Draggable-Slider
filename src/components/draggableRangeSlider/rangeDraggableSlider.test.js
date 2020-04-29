import React from 'react';
import RangeSliderComponent from '../draggableRangeSlider/rangeDraggableSlider.component';
import { shallow,configure } from 'enzyme';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

const min = 0, maxValue = 200, isDisabled = false, stepNumber = 20 , mainValue = 10, callBackValue =0


test('should render Range Slider Component with value minValue and MaxValue', () => {
    const div = document.createElement('div');
    ReactDOM.render(        <RangeSliderComponent
        value= {mainValue}
        min={min}
        max={maxValue}
    /> , div);
    ReactDOM.unmountComponentAtNode(div);
});


test('should render Range Slider Component without props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RangeSliderComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});



test('should render Range Slider Component with all props', () => {
    const div = document.createElement('div');
    ReactDOM.render(        <RangeSliderComponent
        value= {mainValue}
        isDisabled={isDisabled}
        step={stepNumber}
        min={min}
        max={maxValue}
    /> , div);
    ReactDOM.unmountComponentAtNode(div);
});

test('should render Range Slider Component with isDisbaled Props', () => {
    const div = document.createElement('div');
    ReactDOM.render(        <RangeSliderComponent
        value= {mainValue}
        isDisabled={isDisabled}
        min={min}
        max={maxValue}
    /> , div);
    ReactDOM.unmountComponentAtNode(div);
});