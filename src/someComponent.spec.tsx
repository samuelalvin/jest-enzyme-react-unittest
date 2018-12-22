import {
    configure,
    shallow,
    mount,
    ShallowWrapper,
    ReactWrapper
} from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Adapter from 'enzyme-adapter-react-16';
import { SomeComponent } from './someComponent';
import { ChildComponent } from './childComponent';

describe('react unit tests', () => {
    configure({
        adapter: new Adapter()
    });

    describe('shallow tests', () => {
        let shallowWrapper: ShallowWrapper;

        beforeEach(() => {
            shallowWrapper = shallow(<SomeComponent />);
        });

        it('able to find an html element', () => {
            expect(shallowWrapper.find('h1').html()).toContain('Some Title');
            expect(shallowWrapper.find('p').length).toBe(3);
        });

        it('able to find an html element by class', () => {
            expect(shallowWrapper.find('.random-class').html())
                .toContain('Second Paragraph with a class');
        });

        it('able to find an html element by id', () => {
            expect(shallowWrapper.find('#randomId').html())
                .toContain('Second Paragraph with an id');
        });

        it('able to find a React Component', () => {
            expect(shallowWrapper.find(ChildComponent).length).toBe(1);
            expect(shallowWrapper.find('#childId').exists())
                .toBeFalsy();
        });
    });

    describe('full DOM tests', () => {
        let reactWrapper: ReactWrapper;

        beforeEach(() => {
            reactWrapper = mount(<SomeComponent />);
        });
        
        it('Child React Component html content would be rendered', () => {
            expect(reactWrapper.find(ChildComponent).length).toBe(1);
            expect(reactWrapper.find('p').length).toBe(4);
            expect(reactWrapper.find('#childId').html())
                .toContain('Child component content');
        });
    });
});