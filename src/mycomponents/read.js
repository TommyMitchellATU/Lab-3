//Componet inside app

import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

//Read
function Read() {

    const [data, setData] = useState([]);

    useEffect(
        () => {
            axios.get("https://jsonblob.com/api/jsonblob/1161593332966481920")
                .then(
                    (response) => {
                        setData(response.data.books);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        }, []
    );

    return (
        <div>
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;