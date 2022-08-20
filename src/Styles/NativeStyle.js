import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  letf: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  fontSize10: {
    fontSize: 10,
  },
  fontSize12: {
    fontSize: 12,
  },
  fontSize14: {
    fontSize: 14,
  },
  fontSize16: {
    fontSize: 16,
  },
  fontWeight: {
    normal: 'normal',
    bold: 'bold',
  },
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
  fontVariant: {
    smallcaps: 'small-caps',
    oldstylenums: 'oldstyle-nums',
    liningnums: 'lining-nums',
    tabularnums: 'tabular-nums',
    proportionalnums: 'proportional-nums',
  },
  textAlign: {
    auto: 'auto',
    left: 'left',
    right: 'right',
    center: 'center',
    justify: 'justify',
  },
  textDecorationLine: {
    none: 'none',
    underline: 'underline',
    linethrough: 'line-through',
  },
  lineHeight: {
    5: 5,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
  },
});
