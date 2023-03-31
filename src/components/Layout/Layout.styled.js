import styled from "@emotion/styled";

export const Container = styled.div`
	padding: 15px 0;
	nav > ul{
		display: flex;
		gap: 10px;
		padding: 0 30px;
		padding-bottom:10px;
		border-bottom: 1px solid black;

		a {
			text-decoration: none;
			color: black;
		}
	}
	
	main{
		padding: 15px 30px;
	}
	.active{
		color: #ed593f;
	}
`;