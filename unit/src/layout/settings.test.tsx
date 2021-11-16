import { defaultSettings } from './settings';

describe('layout default settings', () => {
  it('setting config', () => {
    expect(defaultSettings).toMatchInlineSnapshot(`
      Object {
        "primaryColor": "#1890ff",
        "route": Object {
          "path": "/",
          "routes": Array [
            Object {
              "component": "@/layout/BastLayout",
              "icon": <ForwardRef(HomeOutlined) />,
              "name": "auto test",
              "path": "/",
              "routes": Array [
                Object {
                  "component": "@/pages/index",
                  "name": "home",
                  "path": "/home",
                },
                Object {
                  "component": "@/pages/Element",
                  "name": "element",
                  "path": "/unit/element",
                },
                Object {
                  "component": "@/pages/Redux",
                  "name": "redux",
                  "path": "/unit/redux",
                },
                Object {
                  "component": "@/layout/RouterParmas",
                  "name": "router parmas",
                  "path": "/unit/routerparmas",
                  "routes": Array [
                    Object {
                      "component": "@/pages/RouterParmas",
                      "path": "/unit/routerparmas/:id",
                    },
                  ],
                },
              ],
            },
          ],
        },
        "splitMenus": false,
      }
    `);
  });
});
