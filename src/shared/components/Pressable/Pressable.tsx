import styled from '@emotion/native';
import { Pressable as RNPressable } from 'react-native';
import { buildStyledProps, ICommonStyledProps } from '../../styles/common';

export interface IPressablePropsProps extends ICommonStyledProps {}

const Pressable = styled(RNPressable)(
  (styledProps: ICommonStyledProps) => buildStyledProps({ ...styledProps, flex: 0 }) as any,
);

export default Pressable;
