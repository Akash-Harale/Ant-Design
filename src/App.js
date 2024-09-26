import './App.css';
import React, { useState } from 'react';
import { Avatar, Breadcrumb, Button, Layout, Menu, Select, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title } = Typography;

const items = [
  {
    key: 'title1',
    label: 'Day 1',
    children: [
      {
        key: '1',
        label: 'Normal Buttons',
        path: "https://ant.design/components/button"
      },
      {
        key: '2',
        label: 'Float Buttons',
        path: "https://ant.design/components/float-button"
      },
      {
        key: '3',
        label: 'Icons',
        path: "https://ant.design/components/icon"
      }
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'title2',
    label: 'Day 2',
    children: [
      // {
      //   key: '3',
      //   label: 'Navbar',
      // },
      // {
      //   key: '4',
      //   label: 'Sidebar',
      // },
      // {
      //   key: '5',
      //   label: 'Content',
      // },
      // {
      //   key: '6',
      //   label: 'Footer',
      // },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'title3',
    label: 'Day 3',
    children: [
      // {
      //   key: '7',
      //   label: 'Option 13',
      // },
      // {
      //   key: '8',
      //   label: 'Option 14',
      // },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'title4',
    label: 'Day 4',
    children: [
      // {
      //   key: '7',
      //   label: 'Option 13',
      // },
      // {
      //   key: '8',
      //   label: 'Option 14',
      // },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'title5',
    label: 'Day 5',
    children: [
      // {
      //   key: '7',
      //   label: 'Option 13',
      // },
      // {
      //   key: '8',
      //   label: 'Option 14',
      // },
    ],
  },
];

function App() {
  const navigate = useNavigate();
  const [iframeUrl, setIframeUrl] = useState('');
  const handleGoogleClick = () => {
    setIframeUrl('https://ant.design/components/button');
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = (e) => {
    const menuItem = items.find(item => item.children.find(child => child.key === e.key))?.children.find(child => child.key === e.key);
    if (menuItem && menuItem.path) {
      setIframeUrl(menuItem.path); // Set the iframe URL to the selected item's path
    }
  };

  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10, display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <Title level={3} style={{ color: 'white' }}>AKASH</Title>

          <div style={{ width: "300px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* search Box */}
            <Select
              showSearch
              style={{
                width: 200,
              }}
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
                },
              ]}
            />
            <Avatar size={40} style={{ backgroundColor: 'red', }}>A</Avatar>
          </div>
        </Header>
        <Layout>
          <Sider style={{ background: '#e6e6e6' }}>
            <Menu
              onClick={onClick}
              style={{
                width: 200,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                padding: '0 38px',
              }}
            >
              <div
                style={{
                  padding: 24,
                  minHeight: '80vh',
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                {/* iframe to load the external URL */}
                {iframeUrl && (
                  <iframe
                    src={iframeUrl}
                    title="Content"
                    style={{
                      width: '100%',
                      height: '600px',
                      border: 'none',
                      marginTop: '20px',
                    }}
                  ></iframe>
                )}
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Ant Design ©{new Date().getFullYear()} Created by Akash Harale.
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
