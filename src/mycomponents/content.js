// Main content home Page
//Content
function Content() {
    return (
        <div>
            {/* Display Hello World and current time */}
            <h1>Hello World</h1>
             <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

export default Content;