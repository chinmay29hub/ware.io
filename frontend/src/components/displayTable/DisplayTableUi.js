// import conn from "./displayTable";
// let hello
let newProduct;

async function display () {
    await fetch("http://localhost:5000/products", {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newProduct),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
}
display()

function DisplayTableUi () {
    // conn.then((result) => {
    //         hello = JSON.stringify(result)
    // }).catch((err) => {
    //     console.err("Error :"  +  err)
    // })
    return (
        <div>
        <p>
            {}
        </p>
        </div>
    );
}

export default DisplayTableUi