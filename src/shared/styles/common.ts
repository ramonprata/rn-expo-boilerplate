export interface ICommonStyledProps {
  center?: boolean;
  centerX?: boolean;
  centerY?: boolean;
  flexRow?: boolean;
  gap?: number;
  flex?: number;
}
export const buildStyledProps = (props?: ICommonStyledProps) => {
  return {
    ...(props?.centerX && { justifyContent: 'center' }),
    ...(props?.centerY && { alignItems: 'center' }),
    ...(props?.center && { justifyContent: 'center', alignItems: 'center' }),
    ...(props?.flexRow && { flexDirection: 'row' }),
    ...(props?.gap && { gap: props.gap }),
    flex: props?.flex ?? 1,
  };
};
