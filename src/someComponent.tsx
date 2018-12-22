import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChildComponent } from './childComponent';

interface ISomeComponentProps { }

export class SomeComponent extends React.Component<ISomeComponentProps> {
    render(): JSX.Element {
        return (
            <div>
                <h1>Some Title</h1>
                <p>First Paragraph</p>
                <p className="random-class">Second Paragraph with a class</p>
                <p id="randomId">Second Paragraph with an id</p>
                <ChildComponent />
            </div>
        );
    }
}

