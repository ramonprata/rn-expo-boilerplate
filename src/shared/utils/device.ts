export class Device {
  static async getUserToken() {
    // access storage
    return new Promise((res) => {
      setTimeout(() => {
        res('some-fake-token');
      }, 3000);
    });
  }
  static async saveUserToken() {
    // access storage
    return new Promise((res) => {
      setTimeout(() => {
        res(true);
      }, 500);
    });
  }
}
