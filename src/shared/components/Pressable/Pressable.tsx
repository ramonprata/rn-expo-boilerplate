import styled from '@emotion/native';
import { Pressable as RNPressable } from 'react-native';
import { buildStyledProps, ICommonStyledProps } from '../../styles/common';

export interface IBoxContentProps extends ICommonStyledProps {}

const Pressable = styled(RNPressable)((styledProps: ICommonStyledProps) => buildStyledProps(styledProps) as any);

export default Pressable;
