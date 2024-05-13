import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { useColorScheme } from 'react-native';

import ThemedView from '../ThemedView/ThemedView';
import { theme } from '../../theme/theme';
import * as Styled from './Collapsible.styled';
import Typography from '../Typography/Typography';

function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <Styled.Heading onPress={() => setIsOpen((value) => !value)} activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={colorScheme === 'light' ? theme.colors.light.icon : theme.colors.dark.icon}
        />
        <Typography>{title}</Typography>
      </Styled.Heading>
      {isOpen && <Styled.Content>{children}</Styled.Content>}
    </ThemedView>
  );
}

export default Collapsible;
