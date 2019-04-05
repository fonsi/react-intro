import * as React from 'react';
import * as ReactDOM from 'react-dom';

function Clock() {
    let timerID: number | undefined;
    const [date, updateDate] = React.useState(new Date());

    React.useEffect(() => {
        timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        };
    });

    const tick = () => {
        updateDate(new Date());
    };

    return (
        <section className="hero is-dark is-fullheight is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        <span className="is-size-7">Current time: </span>
                        <span className="is-size-1">{date.toLocaleTimeString()}</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

ReactDOM.render(<Clock />, document.getElementById('root'));
