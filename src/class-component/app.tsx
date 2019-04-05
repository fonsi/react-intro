import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TagList } from './components/tag-list';
import { Tag, TAG_SIZES } from './types/tag';

type AppProps = {};

interface AppState {
    counter: number;
    tags: Tag[];
}

const size = TAG_SIZES.MEDIUM;

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0, tags: [] };
    }

    private addTag = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const newCounter = this.state.counter + 2;
        const newTag: Tag = { id: newCounter.toFixed(), text: `Item ${newCounter}` };
        this.setState({ counter: newCounter, tags: [...this.state.tags, newTag] });
    };

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
                                <a className="button is-primary is-small" onClick={this.addTag}>
                                    + Add
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="level">
                        <TagList tags={this.state.tags} size={size} />
                    </div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
