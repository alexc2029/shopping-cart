import styled from "styled-components";

const CallToAction = styled.button`
	text-decoration: none;
	border: none;
	background-color: var(--color-accent);
	color: white;
	border-radius: 8px;
	padding: 12px 0;
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: var(--color-hover);
	}
`;

export default CallToAction;
