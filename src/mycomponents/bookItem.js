import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// items used in the book sections
function BookItem(props) {
    return (
        <div>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title><h2>{props.myBook.title}</h2></Card.Title>
                    <Card.Text>
                        <img src={props.myBook.thumbnailUrl}></img>
                    </Card.Text>
                    <Card.Footer><p>{props.myBook.authors[0]}</p></Card.Footer>
                </Card.Body>
            </Card>
            
        </div>

    );
}

export default BookItem;