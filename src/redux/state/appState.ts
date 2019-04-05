import { createStore } from 'redux';
import { Tag } from '../types/tag';
import { TAG_SIZES } from '../../class-component/types/tag';
import { Reducer } from 'redux';

export enum ActionTypes {
    ADD_TAG,
    REMOVE_TAG,
}

interface AddTagAction {
    type: ActionTypes.ADD_TAG;
}

interface RemoveTagAction {
    type: ActionTypes.REMOVE_TAG;
    payload: Tag;
}

type Actions = AddTagAction | RemoveTagAction;

export interface ApplicationState {
    tags: Tag[];
    size: TAG_SIZES;
    counter: number;
}

const AppState: ApplicationState = {
    tags: [],
    size: TAG_SIZES.MEDIUM,
    counter: 0,
};

const reducer: Reducer<ApplicationState, Actions> = (
    state: ApplicationState = AppState,
    action: Actions
) => {
    switch (action.type) {
        case ActionTypes.ADD_TAG:
            const newCounter = state.counter + 2;
            const newTag: Tag = { id: newCounter.toFixed(), text: `Item ${newCounter}` };

            return {
                ...state,
                tags: [...state.tags, newTag],
                counter: newCounter,
            };
        case ActionTypes.REMOVE_TAG:
            return {
                ...state,
                tags: state.tags.filter(tag => tag.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export const store = createStore(reducer);
