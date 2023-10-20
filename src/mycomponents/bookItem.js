import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// items used in the book sections
function BookItem(props) {
    return (
        <div>

            {/* Adds cards to the read sections */}
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                {/* linking card pieces with read.js */}
                <Card.Body>
                    <blockquote className="blockquote mb-0"><h2>{props.myBook.title}</h2></blockquote>
                    <img src={props.myBook.thumbnailUrl}></img>

                    <footer>
                        {props.myBook.authors[0]}
                    </footer>
                </Card.Body>
            </Card>
    
        </div>
    );
}

export default BookItem;