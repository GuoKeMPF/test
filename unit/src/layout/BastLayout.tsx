import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { withRouter } from 'react-router';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { BasicLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, DefaultFooter } from '@ant-design/pro-layout';
import { defaultSettings } from './settings';

const Layout = (props: any) => {
  const { children, history, match } = props;
  const [collapsed, setCollapsed] = useState(false);
  const [pathname, setPathname] = useState(match.path);
  const MenuNode = ({ id, title }: { id?: string; title: ReactNode }) => (
    <span id={id}>{title}</span>
  );

  const settings: BasicLayoutProps = {
    ...defaultSettings,
    location: {
      pathname,
    },
    style: {
      height: '100vh',
    },
    navTheme: 'light',
    collapsed,
    fixSiderbar: true,
    collapsedButtonRender: false,
  };
  return (
    <ProLayout
      {...settings}
      onCollapse={setCollapsed}
      headerContentRender={() => {
        return (
          <div
            onClick={() => setCollapsed(!collapsed)}
            style={{
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        );
      }}
      menuItemRender={(item: any, dom) => {
        return (
          <a
            onClick={() => {
              const path = item.path || '/';
              setPathname(path);
              history.push(path);
            }}
            id={`${item?.name}`}
          >
            <MenuNode title={dom} />
          </a>
        );
      }}
      footerRender={() => (
        <DefaultFooter
          links={[]}
          copyright="footer"
        />
      )}
    >
      <PageContainer>
        {children}
      </PageContainer>
    </ProLayout>
  );
};
export default withRouter(Layout);
