import React  from 'react';
import {Text, TextStyle} from 'react-native';

import colors from '../../resources/colors';

// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

/**
 * View for UIText
 * @param {IUITextViewProps} props
 * @returns
 */

interface IUITextViewProps extends TextProps {
  // Font type
  // Font size
  size?: number;
  // Font color
  color?: string;
  // Styling for container
  containerStyle?: TextStyle;
  // Max number of lines
  numberOfLines?: number;
  // Alignment of text
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  // Styling for text
  style?: TextStyle | TextStyle[];
  // Children to render
  children?: ReactNode;
  text?: string |  number 
}
const UITextView: React.FunctionComponent<IUITextViewProps> = ({
  color = colors.accent.solid_black,
  numberOfLines,
  textAlign,
  style,
  children,
  text,
  ellipsizeMode,
}) => {

  // const fontSize = useMemo(() => RFValue(FontType.fontSize, deviceHeight), []);
  const textValue =  text === undefined ? children : text
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        {
          color: color,
          textAlign: textAlign,
          height: 'auto',
        },
        style,
      ]}>
      {textValue === undefined ? '' : textValue}
    </Text>
  );
};

export default React.memo(UITextView);
