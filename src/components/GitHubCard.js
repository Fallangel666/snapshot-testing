import Card from 'react-bootstrap/Card';
import Me from './me.jpg';
function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Me} />
      <Card.Body>
        <Card.Title>FallanAngel666</Card.Title>
        <Card.Text>
         Software dev student 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;