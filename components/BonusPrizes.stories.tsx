import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import BonusPrize from './BonusPrizes';

const images = [
    { uri: require("./assets/img/img_1.png")},
    { uri: require("./assets/img/img_2.png") },
  ];
 

  storiesOf('BonusPrize', module)
  .addDecorator(story => <View >{story()}</View>)
  .add('default', () => <BonusPrize imgs={images}/>)