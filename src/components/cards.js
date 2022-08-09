import Card from 'react-bootstrap/Card';

function Cards(props) {
    const {
        preferredFullName = '',
        jobTitleName = '',
        employeeCode = '',
        region = ''
    } = props?.emp;
    const emp_details = `${preferredFullName} is working as ${jobTitleName} from ${region}`;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{preferredFullName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{jobTitleName}</Card.Subtitle>
        <Card.Text>
          {emp_details}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;