import styled from '@emotion/native';
import { View } from 'react-native';
import { buildStyledProps, ICommonStyledProps } from '../../styles/common';

export interface IBoxContentProps extends ICommonStyledProps {}

const ViewContent = styled(View)((styledProps: ICommonStyledProps) => buildStyledProps(styledProps) as any);

export default ViewContent;
