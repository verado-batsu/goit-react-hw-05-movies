import styled from "@emotion/styled";

export const DetailsContainer = styled.div`
	button{
		margin-bottom: 5px;
	}
	.movie-info{
		display: flex;
		gap: 10px;
		margin-bottom:10px;

		.main-info{
			h2,h3{
				margin-bottom:10px
			}
			li:not(:last-child) {
				margin-bottom:10px
			}
			.genres{
				display: flex;
				gap: 5px;
			}
		}
		
	}
	.additional-info{
		h3{
			margin-bottom:10px
		}
		li:not(:last-child) {
			margin-bottom: 5px
		}
	}
	.additional-info > ul{
		margin-bottom: 10px;
		padding: 10px 0;
		border-bottom: 1px solid black;
	}
`;