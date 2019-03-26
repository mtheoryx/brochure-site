import React from 'react';
import { storiesOf } from '@storybook/react';
import Spotlight from './Spotlight';
import StreamContext from '../../data/stream-content';
import DataContext from '../../data/data-content';
import { isStream } from '../../../util';

const content = isStream ? StreamContext : DataContext;

storiesOf(`Home Spotlight`, module).add(`default styling`, () => {
  return <Spotlight content={content.spotlight} />;
});
