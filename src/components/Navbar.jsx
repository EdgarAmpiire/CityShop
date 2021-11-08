/** @format */

import { Link } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60px;
	
	${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mobile({ padding: "10px 0px"})}
`;

/* Left */
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;

	${mobile({display: "none"})}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;

	${mobile({ marginLeft: "10px" })}
`;

const Input = styled.input`
	border: none;

	${mobile({width: "50px"})}
`;

/* Center */
const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;

	${mobile({ fontSize: "24px" })}
`;

/* Right */
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${mobile({ flex:2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	text-decoration: none;

	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="Search" />
						<Search style={{ color: "gray", fontSize: "16px" }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>
						<Link to="/" style={{ textDecoration: "none", color: "black" }}>
							CityShop.{" "}
						</Link>{" "}
					</Logo>
				</Center>
				<Right>
					<MenuItem>
						<Link
							to="/register"
							style={{ textDecoration: "none", color: "black" }}>
							REGISTER{" "}
						</Link>{" "}
					</MenuItem>
					<MenuItem>
						<Link
							to="/login"
							style={{ textDecoration: "none", color: "black" }}>
							SIGN IN
						</Link>{" "}
					</MenuItem>
					<MenuItem>
						<Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
							<Badge badgeContent={4} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
