/** @format */

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;

	${mobile({ padding: "10px" ,flexDirection: "column" })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;

	${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;

	${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;

	${mobile({ width: "100%" })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
	cursor: pointer;
`;

const FilterSizeOption = styled.option`
	font-size: 14px;
`;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;

`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: teal;
        color: white;
        transition: all 0.5s ease;
    }
`;

const ProductPage = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />

			<Wrapper>
				<ImgContainer>
					<Image
					src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" 
                />
				</ImgContainer>
				<InfoContainer>
					<Title>HAKURA T-SHIRT</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
						ipsum quidem inventore, molestiae cum totam dignissimos neque nulla
						ad nam, soluta dolor quaerat asperiores deserunt ea praesentium
						veniam! Repudiandae, id.
					</Desc>
					<Price>Shs. 31,000</Price>

					<FilterContainer>
						<Filter>
							<FilterTitle>Color:</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="blue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size:</FilterTitle>
							<FilterSize>
								{/* <FilterSizeOption disabled selected>
									Size
								</FilterSizeOption> */}
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>

					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Link to="/cart">
						<Button>ADD TO CART</Button>
						</Link>
					</AddContainer>
				</InfoContainer>
			</Wrapper>

			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductPage;
