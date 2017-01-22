import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx'

interface MyProps {}
interface MyState {}

@connect(['englishStore', 'frenchStore'])
class Root extends Component<MyProps, MyState> {
    render({ englishStore, frenchStore }) {
        return <div>
            <p>{ englishStore.title }</p>
            <p>{ frenchStore.title }</p>
        </div>
    }
}

export default Root
