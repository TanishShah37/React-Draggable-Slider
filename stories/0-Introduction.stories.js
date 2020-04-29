/**
 * Author: Akash Kumar Gaur
 * Email: akash.gaur@drivezy.com
 */

 import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

storiesOf('Introduction', module)
  .addDecorator(centered)
  .add('Component', () => (
    <div className='Intro'>
      <h1 style={{paddng:'20px'}}>React Draggable Slider</h1><br/>
      <h3 style={{ color: '#828282', position:'absolute',padding:'50px 10px 10px 30px'}}>
        Reuseable React Component
      </h3>
    </div>
  ), { viewport: { defaultViewport: 'reset' } });
;
