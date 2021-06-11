import {colors} from '@utils/Colors';
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
            id: 'BOTTOM_TABS_LAYOUT',
            children: [
              {
                stack: {
                  id: 'HOME_TAB',
                  children: [
                    {
                      component: {
                        id: 'HOME_SCREEN',
                        name: 'Home',
                        options: {
                          topBar: {
                            title: {
                              text: 'Home',
                            },
                          },
                          bottomTab: {
                            text: 'Trang Chủ',
                            icon: require('@icons/ic_home.png'),
                            iconColor: colors.darkGrey,
                            textColor: colors.darkGrey,
                            fontSize: 12,
                            selectedIconColor: colors.primary,
                            selectedTextColor: colors.primary,
                            selectedFontSize: 14,
                            iconHeight: 24,
                            iconWidth: 24,
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  id: 'ORDER_TAB',
                  children: [
                    {
                      component: {
                        id: 'ORDER_SCREEN',
                        name: 'Order',
                        options: {
                          topBar: {
                            title: {
                              text: 'Đặt Món',
                            },
                          },
                          bottomTab: {
                            text: 'Đặt Món',
                            icon: require('@icons/ic_order.png'),
                            iconColor: colors.darkGrey,
                            textColor: colors.darkGrey,
                            fontSize: 12,
                            selectedIconColor: colors.primary,
                            selectedTextColor: colors.primary,
                            selectedFontSize: 14,
                            iconHeight: 24,
                            iconWidth: 24,
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  id: 'STORE_TAB',
                  children: [
                    {
                      component: {
                        id: 'STORE_SCREEN',
                        name: 'Store',
                        options: {
                          topBar: {
                            title: {
                              text: 'Của Hàng',
                            },
                          },
                          bottomTab: {
                            text: 'Cửa Hàng',
                            icon: require('@icons/ic_store.png'),
                            iconColor: colors.darkGrey,
                            textColor: colors.darkGrey,
                            fontSize: 12,
                            selectedIconColor: colors.primary,
                            selectedTextColor: colors.primary,
                            selectedFontSize: 14,
                            iconHeight: 24,
                            iconWidth: 24,
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  id: 'ACCOUMULATED_POINT_TAB',
                  children: [
                    {
                      component: {
                        id: 'ACCOUMULATED_POINT_SCREEN',
                        name: 'AccoumulatePoint',
                        options: {
                          topBar: {
                            title: {
                              text: 'Tích Điểm',
                            },
                          },
                          bottomTab: {
                            text: 'Tích Điểm',
                            icon: require('@icons/ic_card_gift.png'),
                            iconColor: colors.darkGrey,
                            textColor: colors.darkGrey,
                            fontSize: 12,
                            selectedIconColor: colors.primary,
                            selectedTextColor: colors.primary,
                            selectedFontSize: 14,
                            iconHeight: 24,
                            iconWidth: 24,
                          },
                        },
                      },
                    },
                  ],
                },
              },
              {
                stack: {
                  id: 'OTHER_TAB',
                  children: [
                    {
                      component: {
                        id: 'OTHER_SCREEN',
                        name: 'Other',
                        options: {
                          topBar: {
                            title: {
                              text: 'Khác',
                            },
                          },
                          bottomTab: {
                            text: 'Khác',
                            icon: require('@icons/ic_other.png'),
                            iconColor: colors.darkGrey,
                            textColor: colors.darkGrey,
                            fontSize: 12,
                            selectedIconColor: colors.primary,
                            selectedTextColor: colors.primary,
                            selectedFontSize: 14,
                            iconHeight: 24,
                            iconWidth: 24,
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

  // Navigation change bottom tab
  switchToTab = async (index: number) => {
    Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
      bottomTabs: {
        currentTabIndex: 1,
      },
    });
  };
}

export default new ManagerNavigation();
