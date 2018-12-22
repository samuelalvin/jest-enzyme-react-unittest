import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface IChildComponentProps { }

export class ChildComponent extends React.Component<IChildComponentProps> {
    render(): JSX.Element {
        return (
            <div>
                <p id="childId">Child component content</p>
            </div>
        );
    }
}

