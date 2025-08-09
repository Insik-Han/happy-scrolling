import FontAwesome from '@expo/vector-icons/FontAwesome';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { Pressable } from 'react-native';

export const HeaderButton: FC<ComponentProps<typeof Pressable>> = ({
  className,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      className={clsx(
        'mr-2 rounded-lg bg-secondary/50 p-2 active:bg-secondary',
        className
      )}
    >
      {({ pressed }) => (
        <FontAwesome
          className="text-secondary-foreground"
          name="info-circle"
          size={20}
          style={{
            opacity: pressed ? 0.7 : 1,
          }}
        />
      )}
    </Pressable>
  );
};
