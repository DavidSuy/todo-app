import './TodoForm.scss';
import { FormGroup, InputGroup, Slider } from '@blueprintjs/core';

export default function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className='todo-form'>
      <h2>Add To Do Item</h2>

      <FormGroup>
        <span>To Do Item</span>
        <InputGroup
          onChange={props.handleChange}
          name='text'
          type='text'
          placeholder='Item Details'
        />
      </FormGroup>

      <FormGroup>
        <span>Assigned To</span>
        <InputGroup
          onChange={props.handleChange}
          name='assignee'
          type='text'
          placeholder='Assignee Name'
        />
      </FormGroup>

      <FormGroup>
        <span>Difficulty</span>
        <input
          onChange={props.handleChange}
          defaultValue={props.defaultValues}
          // value={3}
          type='range'
          min={1}
          max={5}
          name='difficulty'
        />
      </FormGroup>

      <label>
        <button type='submit'>Add Item</button>
      </label>
    </form>
  );
}
