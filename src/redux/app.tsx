import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { TagList } from './components/tag-list';
import { Tag } from './types/tag';
import { store, ApplicationState, ActionTypes } from './state/appState';
import { TAG_SIZES } from '../class-component/types/tag';
import { Dispatch } from 'redux';

interface StateProps {
    tags: Tag[];
    size: TAG_SIZES;
}

interface DispatchProps {
    addTag: () => void;
}

type AppProps = StateProps & DispatchProps;

function mapStateToProps(state: ApplicationState): StateProps {
    return {
        ...state,
    };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return {
        addTag: () => {
            dispatch({ type: ActionTypes.ADD_TAG });
        },
    };
}

class App extends React.Component<AppProps, ApplicationState> {
    public render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <h1 className="title">Tags list</h1>
                            </div>
                            <div className="level-item">
                                <a
                                    className="button is-primary is-small"
                                    onClick={this.props.addTag}
                                >
                                    + Add
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="level">
                        <TagList tags={this.props.tags} size={this.props.size} />
                    </div>
                </div>
            </section>
        );
    }
}

const ConnectedAPP = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedAPP />
    </Provider>,
    document.getElementById('root')
);
