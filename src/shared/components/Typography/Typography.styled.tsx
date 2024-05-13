import styled from '@emotion/native';
import { Text } from 'react-native';
import { TColors, TTextStyle, theme } from '../../theme';

export interface ITypographyStyledProps {
  variant: keyof typeof theme.typography;
  size: number | null;
  color: keyof TColors;
  bold: boolean;
  caps: boolean;
  colorSchema: 'light' | 'dark';
}

export const TypographyStyled = styled(Text)((props: ITypographyStyledProps) => {
  const variantFont = theme.typography[props.variant] as Required<TTextStyle>;
  const fontWeight = props.bold ? 'bold' : variantFont.fontWeight;
  const color = theme.colors[props.colorSchema][props.color] ?? theme.colors[props.colorSchema].textPrimary;
  const textTransform = props.caps ? 'uppercase' : 'none';
  const fontSize = props.size ?? variantFont.fontSize;
  return {
    fontSize,
    color,
    textTransform,
    fontWeight,
  } as any;
});
