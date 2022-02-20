import react from 'react';
import { store } from '../../store';
import { changeInputValue } from '../../data/demo';

interface IState {
  demo: {
    value: string;
  }
}

interface IProps {
}

class SearchBox extends react.Component<IProps,IState> {
  constructor(props: any) {
    super(props);

    this.state = store.getState() as IState;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange() {
    this.setState(() => store.getState() as IState);
  }

  handleInputChange(e: any) {
    const { value } = e.target;
    store.dispatch(changeInputValue(value));
  }

  render(): react.ReactNode {
    const { value } = this.state?.demo;
    return <input onChange={this.handleInputChange} value={value} />
  }
}

export default SearchBox;