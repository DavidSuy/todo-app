import './header.scss';
import { Navbar } from '@blueprintjs/core';
// import { Button } from '@blueprintjs/core';
// import { Button, Card, Elevation } from '@blueprintjs/core';

export default function Header(props) {
  return (
    <Navbar>
      <h1>To Do App</h1>
    </Navbar>
    // <Navbar>
    //   <Navbar.Group>
    //     <Navbar.Heading>Blueprint</Navbar.Heading>
    //     <Navbar.Divider />
    //     <Button className='bp4-minimal' icon='home' text='Home' />
    //     <Button className='bp4-minimal' icon='document' text='Files' />
    //   </Navbar.Group>
    // </Navbar>
  );
}
