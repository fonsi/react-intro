import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TagList } from './components/tag-list';
import { Tag, TAG_SIZES } from './types/tag';

const tagsList: Tag[] = [
    {
        id: '1',
        text: 'Item 1',
    },
    {
        id: '2',
        text: 'Item 2',
    },
    {
        id: '3',
        text: 'Item 3',
    },
];

const size = TAG_SIZES.MEDIUM;

function App() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Tags list</h1>
                <TagList tags={tagsList} size={size} />
            </div>
        </section>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
