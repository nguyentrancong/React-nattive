import {ComponentDidAppearEvent, Navigation} from 'react-native-navigation';

class ManagerNavigation {
  private _component?: ComponentDidAppearEvent;
  constructor() {
    Navigation.events().registerAppLaunchedListener(async () => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Home',
                        options: {
                          topBar: {
                            title: {
                              text: 'Home',
                            },
                          },
                          bottomTab: {
                            text: 'Trang Chủ',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Order',
                        options: {
                          topBar: {
                            title: {
                              text: 'Đặt Món',
                            },
                          },
                          bottomTab: {
                            text: 'Đặt Món',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Shop',
                        options: {
                          topBar: {
                            title: {
                              text: 'Của Hàng',
                            },
                          },
                          bottomTab: {
                            text: 'Cửa Hàng',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'AccoumulatePoint',
                        options: {
                          topBar: {
                            title: {
                              text: 'Tích Điểm',
                            },
                          },
                          bottomTab: {
                            text: 'Tích Điểm',
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: 'Other',
                        options: {
                          topBar: {
                            title: {
                              text: 'Khác',
                            },
                          },
                          bottomTab: {
                            text: 'Khác',
                          },
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      });
    });
  }
}

export default new ManagerNavigation();
