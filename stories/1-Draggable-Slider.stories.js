

import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, boolean, number, } from '@storybook/addon-knobs';
import RangeSliderComponent from '../src/components/draggableRangeSlider/rangeDraggableSlider.component';

storiesOf('Draggable-Slider/Slider', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Draggable Slider', () => (
        <div> 
             <RangeSliderComponent
                isDisabled={boolean('isDisabled', false)}
                step={number('step', 1)}
                min={number('minValue', 0)}
                max={number('maxValue', 200)}
            /> 
        </div>
    ), { viewport: { defaultViewport: 'reset' } })
    .add('SliderWithDisabledAttribute', () => (
        <div> 
        <RangeSliderComponent
           isDisabled={boolean('isDisabled', true)}
           step={number('step', 10)}
           min={number('minValue', 0)}
           max={number('maxValue', 200)}
       /> 
   </div>
    ), { viewport: { defaultViewport: 'reset' } })
    .add('SliderWithNegativeAttribute', () => (
        <div> 
        <RangeSliderComponent
           step={number('step', 10)}
           min={number('minValue', -10)}
           max={number('maxValue', 100)}
       /> 
   </div>
    ), { viewport: { defaultViewport: 'reset' } }).add('SliderWithStep', () => (
        <div> 
        <RangeSliderComponent
           step={number('step', 1)}
           min={number('minValue', 0)}
           max={number('maxValue', 200)}
       /> 
   </div>
    ), { viewport: { defaultViewport: 'reset' } });
;