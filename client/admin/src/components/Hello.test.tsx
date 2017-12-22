import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Hello from './Hello';

enzyme.configure({ adapter: new Adapter() });

it('render the correct text when no enthusiasm level is given', () => {
  const hello = enzyme.shallow(<Hello name="ldj" />);
  expect(hello.find('.greeting').text()).toEqual('Hello ldj!');
});

it('render the correct text with an explicit enthusiasm of 1', () => {
  const hello = enzyme.shallow(<Hello name="ldj" enthusiasmLevel={1} />);
  expect(hello.find('.greeting').text()).toEqual('Hello ldj!');
});

it('render the correct text with an explicit enthusiasm level of 5', () => {
  const hello = enzyme.shallow(<Hello name="ldj" enthusiasmLevel={5} />);
  expect(hello.find('.greeting').text()).toEqual('Hello ldj!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="ldj" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throws when the enthusiasm level is -1', () => {
  expect(() => {
    enzyme.shallow(<Hello name="ldj" enthusiasmLevel={-1} />);
  }).toThrow();
});
