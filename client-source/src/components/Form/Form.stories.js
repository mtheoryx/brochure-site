import React from 'react';
import { storiesOf } from '@storybook/react';
import Form from './Form';
import StreamContext from '../../data/stream-content';
import DataContext from '../../data/data-content';
import { isStream } from '../../../util';

const content = isStream ? StreamContext : DataContext;

storiesOf(`Contact Form`, module).add(`default styling`, () => {
  return <Form />;
});
