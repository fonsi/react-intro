import * as React from 'react';
import { TagItem } from './tag-item';
import { Tag, TAG_SIZES } from '../types/tag';

interface TagListProps {
    tags: Tag[];
    size: TAG_SIZES;
}

export function TagList(props: TagListProps) {
    return (
        <div className={`tags are-${props.size}`}>
            {props.tags.map(tag => (
                <TagItem key={tag.id} text={tag.text} />
            ))}
        </div>
    );
}
