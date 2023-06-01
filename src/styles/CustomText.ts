import styled from 'styled-components/native';

const sizes = {
  small: '14px',
  large: '18px',
};

const colors = {
  light: '#FFF',
  dark: '#000',
};

const weights = {
  normal: '400',
  bold: '700',
};

interface TextProps {
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
  weight?: keyof typeof weights;
}

export const CustomText = styled.Text<TextProps>`
  font-size: ${({ size }) => (size ? sizes[size] : sizes.small)};
  color: ${({ color }) => (color ? colors[color] : colors.dark)};
  font-weight: ${({ weight }) => (weight ? weights[weight] : weights.normal)};
`;
