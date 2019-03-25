import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';
import StreamContext from '../../data/stream-content';
import DataContext from '../../data/data-content';
import { isStream } from '../../../util';

const content = isStream ? StreamContext : DataContext;

storiesOf(`Site Footer`, module).add(`default styling`, () => {
  return <Footer content={content.footer} />;
});
