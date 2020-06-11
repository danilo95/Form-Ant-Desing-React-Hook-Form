import React from "react";
import { Layout, Menu } from "antd";
import Login from './Components/Login'
import "./App.css";
const { Header, Content, Footer } = Layout;

function App() {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<div className='logo' />
				<Menu
					theme='dark'
					mode='horizontal'
					defaultSelectedKeys={["2"]}
				>
					<Menu.Item key='1'>Home</Menu.Item>
					<Menu.Item key='2'>login</Menu.Item>
					<Menu.Item key='3'>Contact Us</Menu.Item>
				</Menu>
			</Header>
			<Content
				className='site-layout'
				style={{ padding: "0 50px", marginTop: 64 }}
			>
				<div
					className='site-layout-background'
					style={{ padding: 24, minHeight: 380 }}
				>
					<Login/>
				</div>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				Tuturial Ant Desing React Hook Form
			</Footer>
		</Layout>
	);
}

export default App;
