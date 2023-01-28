import conn from "./displayTable";
// let hello
function DisplayTableUi () {
    // conn.then((result) => {
    //         hello = JSON.stringify(result)
    // }).catch((err) => {
    //     console.err("Error :"  +  err)
    // })
    return (
        <div>
        <p>
            {conn}
        </p>
        </div>
    );
}

export default DisplayTableUi