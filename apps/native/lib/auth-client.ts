import { expoClient } from '@better-auth/expo/client';
import { createAuthClient } from 'better-auth/react';
// biome-ignore lint/performance/noNamespaceImport: MUST
import * as SecureStore from 'expo-secure-store';

export const authClient = createAuthClient({
  baseURL: process.env.EXPO_PUBLIC_SERVER_URL,
  plugins: [
    expoClient({
      storagePrefix: 'happy-scrolling',
      storage: SecureStore,
    }),
  ],
});
