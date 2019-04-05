import * as React from 'react';

interface TagItemProps {
    text: string;
}

interface TagItemState {
    isHovered: boolean;
}

interface TagItemStyle {
    fontWeight: 'normal' | 'bold';
}

export class TagItem extends React.Component<TagItemProps, TagItemState> {
    constructor(props: TagItemProps, state: TagItemState) {
        super(props, state);
        this.state = { isHovered: false };
    }

    private setIsHovered = (isHovered: boolean = true) => {
        this.setState({ isHovered });
    };

    private getStyle(): TagItemStyle {
        return {
            fontWeight: this.state.isHovered ? 'bold' : 'normal',
        };
    }

    public render() {
        return (
            <span
                className="tag"
                style={this.getStyle()}
                onMouseEnter={() => this.setIsHovered(true)}
                onMouseLeave={() => this.setIsHovered(false)}
            >
                {this.props.text}
            </span>
        );
    }
}
