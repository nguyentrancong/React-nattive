import {
  ComponentDidAppearEvent,
  Navigation,
  Options,
} from 'react-native-navigation';

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
    Navigation.events().registerComponentDidAppearListener(
      this._setComponentId,
    );
  }

  // Set component
  _setComponentId = (event: ComponentDidAppearEvent) => {
    if (event.componentId !== this._component?.componentId) {
      this._component = event;
      console.log('==>> _setComponent', event);
    }
  };

  // Get component
  getComponentId = (): string | undefined => {
    let componentId: string | undefined =
      this._component && this._component['componentId'];
    if (!componentId) {
      return undefined;
    }
    return componentId;
  };

  // Navigation push
  push = async (
    screenName: string,
    passProps?: any,
    options?: Options,
  ): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }
    return Navigation.push(this.getComponentId()!, {
      component: {
        name: screenName,
        passProps: passProps,
        options: options,
      },
    });
  };

  // Navigation push to native
  pushToNative = async (
    screenName: string,
    passProps?: any,
    options?: Options,
  ): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }
    return '';
  };

  // Navigation pop
  pop = async (): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }
    return Navigation.pop(this.getComponentId()!);
  };

  // Navigation pop to
  popTo = async (): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }
    return Navigation.popTo(this.getComponentId()!);
  };
  // Navigation pop to screen
  popToScreen = async (
    screenName: string,
    options?: Options,
  ): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }
    return ' chuaw lam can handle';
  };

  // Navigation pop to root
  popToRoot = async (): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }

    return Navigation.popToRoot(this.getComponentId()!);
  };

  // Navigation show modal
  showModal = async (
    screenName: string,
    passProps?: any,
    options?: Options,
  ): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }
    return Navigation.showModal({
      component: {
        name: screenName,
        passProps: passProps,
        options: options,
      },
    });
  };

  // Navigation show overlay
  showOverlay = async (
    screenName: string,
    passProps?: any,
    options?: Options,
  ): Promise<string> => {
    if (!this.getComponentId()) {
      return 'No component found';
    }
    return Navigation.showOverlay({
      component: {
        name: screenName,
        passProps: passProps,
        options: options,
      },
    });
  };
}

export default new ManagerNavigation();
