import * as SecureStore from 'expo-secure-store';

const STORAGE_TOKEN_KEY = 'atto-plantup-user-token';

export class Storage {
  static async getUserToken() {
    return SecureStore.getItemAsync(STORAGE_TOKEN_KEY);
  }
  static async saveUserToken(token: string) {
    return SecureStore.setItem(STORAGE_TOKEN_KEY, token);
  }
}
