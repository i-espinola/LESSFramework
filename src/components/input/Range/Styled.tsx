import Styled from 'styled-components';

const RangeNumber = Styled.div`
	border: 1px solid #A3A3A3;
	position: relative;
	flex-grow: 0;
	margin-left: 10px;
	border-radius: 3px;

	&:after,
	&:before {
    content: '';
    position: absolute;
    left: -7px;
    top: calc(50% - 7px);
    background: transparent;
    border-right: 7px solid white;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    width: 0;
    height: 0;
	}

	&:before {
		left: -8px;
    top: calc(50% - 8px);
    border-right: 8px solid #a3a3a3;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
	}

	& input {
		z-index: 100;
		border-bottom: none !important;
		border: none !important;
		background: transparent;
		padding: 5px;
    padding-right: 0;
		font-weight: bold;
		width: 100%;
		box-sizing: border-box;

		&:focus,
		&:hover,
		&:active {
			border: none !important;
			outline: none !important;
		}
	}
`;

const RangeSlider = Styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;

	> input {
		-webkit-appearance: none;
		width: calc(100% - 15%);
		height: 1px;
		background: #A3A3A3;
		outline: none;
		padding: 0;
		margin: 0 auto;
		position: relative;

		&::after {
			position: absolute;
			content: '';
			left: 0;
			top: -.5px;
			bottom: 0;
			width: ${({ theme }) => `calc(${theme.width}% / 2)` || '50%'};
			height: 2px;
			background: #00EB84;
		}

		&::-webkit-progress-bar {
			background: #00EB84;

		}
		&::-webkit-progress-value {
			background: #00EB84;
		}

		&::-webkit-slider-progress {
			background: #00EB84;
		}

		&::-webkit-slider-thumb {
			appearance: none;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background: #00EB84;
			opacity: 1;
			cursor: pointer;
			transition: all .15s ease-in-out;

			&:hover {
				width: 20px;
				height: 20px;
			}
		}

		&::-moz-range-progress {
			background: #00EB84;
		}

		&::-moz-range-thumb {
			width: 15px;
			height: 15px;
			border: 0;
			border-radius: 50%;
			background: #00EB84;
			cursor: pointer;
			transition: all .15s ease-in-out;

			&:hover {
				width: 20px;
				height: 20px;
			}
		}
	}
`;

const RangeContainer = Styled.div`
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	> :first-child{
		flex-grow: 1;
		max-width: 80%;
	}
	> :last-child{
		flex-grow: 0;
		max-width: 20%;
	}
`;

export { RangeContainer, RangeNumber, RangeSlider };
