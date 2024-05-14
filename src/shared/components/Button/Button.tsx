import React from 'react';
import Typography from '../Typography/Typography';
import { ITypographyStyledProps } from '../Typography/Typography.styled';
import { IPressablePropsProps } from '../Pressable/Pressable';

import {} from 'react-native';
import { ButtonStyled } from './Button.styled';

interface ButtonProps {
  title: string;
  onPress: () => void;
  typographyProps?: Partial<ITypographyStyledProps>;
  pressableStyledProps?: Partial<IPressablePropsProps>;
}

const Button: React.FC<ButtonProps> = ({ title, typographyProps, pressableStyledProps, onPress }) => {
  return (
    <ButtonStyled {...pressableStyledProps} flex={0} onPress={onPress}>
      <Typography {...typographyProps}>{title}</Typography>
    </ButtonStyled>
  );
};

export default Button;
