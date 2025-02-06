import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    lineHeight: 15,
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'black',
  },
  textButtonRegular: {
    fontSize: 14,
    fontWeight: 'regular',
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'black',
    lineHeight: 27,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'regular',
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: 'regular',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'black',
    lineHeight: 37,
  },
  headingRegular: {
    fontSize: 32,
    fontWeight: 'regular',
    lineHeight: 37,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
