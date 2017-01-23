import Inferno from 'inferno'
import Component from 'inferno-component'
import Header from './Header'

interface MyProps {}
interface MyState {}

export default class Layout extends Component<MyProps, MyState> {
	render({ children }) {
		return <div>
		<Header/>
		{children}
		</div>
	}
}
