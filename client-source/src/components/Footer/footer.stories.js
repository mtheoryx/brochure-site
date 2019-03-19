import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';
import StreamContext from '../../data/stream-content';
import DataContext from '../../data/data-content';

const isStream = process.env.STORYBOOK_IS_STREAM === 'true';
const content = isStream ? StreamContext : DataContext;

storiesOf(`Site Footer`, module).add(`default styling`, () => {
  return <Footer content={content.footer} />;
});
