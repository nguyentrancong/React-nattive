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
                            text: 'Home',
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
                        name: 'Category',
                        options: {
                          topBar: {
                            title: {
                              text: 'Category',
                            },
                          },
                          bottomTab: {
                            text: 'Category',
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
                        name: 'Favorite',
                        options: {
                          topBar: {
                            title: {
                              text: 'Favorite',
                            },
                          },
                          bottomTab: {
                            text: 'Favorite',
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
