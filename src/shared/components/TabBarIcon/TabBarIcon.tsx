// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import * as Styled from './TabBarIcon.styled';

function TabBarIcon({ ...props }: IconProps<ComponentProps<typeof Styled.Icon>['name']>) {
  return <Styled.Icon size={28} {...props} />;
}

export default TabBarIcon;
