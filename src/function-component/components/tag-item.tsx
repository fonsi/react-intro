import * as React from 'react';

interface TagItemProps {
    text: string;
}

export function TagItem(props: TagItemProps) {
    return <span className="tag">{props.text}</span>;
}
