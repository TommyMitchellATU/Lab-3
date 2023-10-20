//Componet inside app
import { useState } from "react";

//Create
function Create() {

    const [ title, setTitle ] = useState('')
    const [author, setAuthor ] = userState('')
    const [frontPage, setFrontPage ] = userState('')

    return (
        <div>
            <h3>Hello from create component</h3>
            <form>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Front Page URL: </label>
                    <input type="text"
                        className="form-control"
                        value={frontPage}
                        onChange={(e) => { setFrontPage(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="button"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

            </form>
        </div>
    )
}

export default Create;