//Componet inside app
import { useState } from "react";

//Create
function Create() {

    //constants
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [cover, setCover] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Title " + title + "Cover: " + cover + "Author: " + author);
    }

    return (
        <div>
            
            <h3>Hello from create component</h3>
            <form onSubmit={handleSubmit}>

                {/* Adding book title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                {/* Adding book Author */}
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                {/* Adding Front Page URL */}
                <div className="form-group">
                    <label>Add Front Page URL: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                {/* Button for adding book */}
                <div>
                    <input type="submit"
                        value="Add Book">

                    </input>

                </div>

            </form>
        </div>
    )
}

export default Create;