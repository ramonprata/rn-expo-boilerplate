import React, { PropsWithChildren } from 'react';
import { ITypographyStyledProps, TypographyStyled } from './Typography.styled';
import { useColorScheme } from '../../hooks';

interface TypographyProps extends Partial<ITypographyStyledProps> {
  applyColorSchema?: boolean;
}

const Typography: React.FC<TypographyProps & PropsWithChildren> = ({
  bold = false,
  caps = false,
  color = 'textPrimary',
  applyColorSchema = true,
  size = null,
  variant = 'default',
  children,
}) => {
  const colorSchema = useColorScheme();

  const styledProps = {
    bold,
    caps,
    color,
    colorSchema: applyColorSchema && colorSchema ? colorSchema : 'light',
    size,
    variant,
  };
  return <TypographyStyled {...styledProps}>{children}</TypographyStyled>;
};

export default Typography;
