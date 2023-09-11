import { cloneDeepWith } from 'lodash-es';

import GlobalEvent from './event';

export interface IComponent<S = any> {
    /**
     * Set the Component state
     * @param values The next values of state
     * @param callback calling after setState
     */
    setState(values: S, callback?: (prevState: S, nextState: S) => void): void;
    /**
     * Trigger the Component update event
     * @param nextState
     */
    render(nextState?: S): void;
    /**
     * Listen to the Component state update event
     * @param listener
     */
    onUpdateState(listener: (prevState: S, nextState: S) => void): void;
    /**
     * Remove the Component update event listening, default is remove all,
     * also you can remove one by pass the listener
     */
    removeOnUpdateState(listener?: Function): void;
    /**
     * Force to update the Component
     */
    forceUpdate(): void;
    /**
     * Get the Component state
     */
    getState(): S;
}

export default abstract class BaseService<S = any> extends GlobalEvent implements IComponent<S> {
    protected abstract state: S;
    constructor(private name: string) {
        super();
    }

    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     * @FIXME Should support batchUpdate based on fiber
     */
    public setState(
        values: Partial<S> | ((prev: S) => Partial<S>),
        callback?: (prevState: S, nextState: S) => void
    ) {
        let nextState = this.state;
        if (typeof values === 'function') {
            nextState = { ...this.state, ...values(this.state) };
        } else {
            nextState = { ...this.state, ...values };
        }
        nextState = cloneDeepWith(nextState, (value) => {
            // FIXME: NOT clone ITextModel
            if (value && typeof value === 'object' && 'uri' in value) {
                return value;
            }
        });
        this.render(nextState);
        callback?.(this.state, nextState);
        this.state = nextState;
    }

    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    public render(nextState: S) {
        this.emit(this.name, this.state, nextState);
    }

    public onUpdateState(listener: (prevState: S, nextState: S) => void) {
        this.subscribe(this.name, listener);
    }

    public removeOnUpdateState(listener?: Function): void {
        this.unsubscribe(this.name, listener);
    }

    public forceUpdate() {
        this.setState({ ...this.state });
    }

    public getState(): S {
        return this.state;
    }
}
