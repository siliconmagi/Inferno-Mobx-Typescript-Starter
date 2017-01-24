import Inferno from 'inferno'
import Component from 'inferno-component'
import Header from './Header'
import styled from 'styled-components';

interface MyProps {}
interface MyState {}

const Wrapper = styled.section`
background: red;
`;

export default class Layout extends Component<MyProps, MyState> {
	render({ children }) {
		return (
		<Wrapper>
		<div>
		<Header/>
		{children}
		</div>
		</Wrapper>
	);
	}
}
