import Inferno from 'inferno'
import Component from 'inferno-component'
import { connect } from 'inferno-mobx'

interface MyProps {}

interface MyState {
  englishStore: string;
  frenchStore: string;
}

@connect(['englishStore', 'frenchStore'])
export default class AppContainer extends Component <MyProps, MyState> {
    render({ englishStore, frenchStore }) {
        return <div>
            <p>{ englishStore.title }</p>
            <p>{ frenchStore.title }</p>
        </div>
    }
}
