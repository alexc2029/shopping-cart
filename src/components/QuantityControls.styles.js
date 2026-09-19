import styled from "styled-components";

export const QuantityControls = styled.div`
	border: 1px solid var(--color-border);
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CountButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	color: var(--color-muted);
	&:hover {
		color: var(--color-text);
	}
`;

export const CountInput = styled.input`
	width: 2rem;
	height: 100%;
	text-align: center;
	border: none;
	border-left: 1px solid var(--color-border);
	border-right: 1px solid var(--color-border);

	/* Firefox */
	appearance: textfield;
	-moz-appearance: textfield;

	/* Chrome, Safari, Edge, Opera */
	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
