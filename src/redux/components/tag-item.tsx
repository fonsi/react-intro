import * as React from 'react';
import { ActionTypes } from '../state/appState';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Tag } from '../../class-component/types/tag';

interface OwnProps {
    tag: Tag;
}

interface MappedProps {
    removeTag: () => void;
}

type TagItemProps = OwnProps & MappedProps;

interface TagItemState {
    isHovered: boolean;
}

interface TagItemStyle {
    fontWeight: 'normal' | 'bold';
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: OwnProps): MappedProps {
    return {
        removeTag: () => {
            dispatch({ type: ActionTypes.REMOVE_TAG, payload: ownProps.tag });
        },
    };
}

class TagItem extends React.Component<TagItemProps, TagItemState> {
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
            <a
                className="tag"
                style={this.getStyle()}
                onMouseEnter={() => this.setIsHovered(true)}
                onMouseLeave={() => this.setIsHovered(false)}
                onClick={this.props.removeTag}
            >
                {this.props.tag.text}
            </a>
        );
    }
}

export default connect(
    () => {},
    mapDispatchToProps
)(TagItem);
