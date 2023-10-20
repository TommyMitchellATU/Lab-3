//Componet inside app
//Book page
import BookItem from "./bookItem";

//Create
function Books(props) {

    // Using map to divide it up
    return props.myBooks.map(
        // arrow function to pull bookitem
        (book)=>{
            return <BookItem myBook = {book} key={book.lsbn}></BookItem>
        }
    );
    
}

export default Books;