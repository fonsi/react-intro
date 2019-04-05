import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ClockState {
    date: Date;
}

class Clock extends React.Component<{}, ClockState> {
    private timerID: number | undefined;

    constructor(props: {}) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <section className="hero is-dark is-fullheight is-bold">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            <span className="is-size-7">Current time: </span>
                            <span className="is-size-1">
                                {this.state.date.toLocaleTimeString()}
                            </span>
                        </h1>
                    </div>
                </div>
            </section>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
