import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const purple1 = { background:"#7367f0", 
color:"white", 
padding:"20px",
fontSize: "1rem",
fontFamily:"Montserrat, Helvetica, Arial, Serif",
fontWeight:"500",

};

const purple2 = { background:"#5c52c0", 
color:"white", 
padding:"20px",
fontSize: "1rem",
fontFamily:"Montserrat, Helvetica, Arial, Serif",
fontWeight:"500",

};

const white = { background:"white", 
color:"black", 
padding:"20px",
fontSize: "1rem",
fontFamily:"Montserrat, Helvetica, Arial, Serif",
fontWeight:"500",

};

function Layout1() {

return(
  <>
    <Layout>
      <Header style={purple1}>Header</Header>
      <Layout>
        <Sider style={white}>Sider</Sider>
        <Content style={purple2}>Content</Content>
      </Layout>
      <Footer style={purple1}>Footer</Footer>
    </Layout>

  </>
);
}

export default Layout1;