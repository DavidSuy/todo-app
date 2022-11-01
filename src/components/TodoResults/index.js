import { Button, Card, Elevation } from '@blueprintjs/core';
import './TodoResults.scss';

export default function TodoResults(props) {
  console.log(props.list);
  let results = props.list.map((item, idx) => (
    <Card
      key={idx}
      interactive={true}
      elevation={Elevation.TWO}
      className='card'
    >
      <div className='card-header'>
        <h5>{item.assignee}</h5>
      </div>
      <p>{item.text}</p>
      <p className='difficulty'>{`Difficulty: ${item.difficulty}`}</p>
    </Card>
  ));
  return <>{results}</>;
}
