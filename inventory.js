function FindBookByName(bookName) {

    console.log("BookName: ", bookName);
    let foundBook;

    //grab all the rows on the page
    let bookRows = document.getElementsByClassName("row");
    console.log(bookRows);

    //loop through each row in the collection
    for(let row = 0; row < bookRows.length; row++){
        //grab the spans from a row as collection
        let bookRow = bookRows[row].getElementsByClassName("bName");
        console.log(bookRow);
        console.log(bookRow.length);

        //loop through each span in the collection
        for(let i = 0; i < bookRow.length; i++) {
            //log the row
            console.log("Span collection: ", bookRow[i]);
            //get the id of the span
            let spanID = bookRow[i].id;
            console.log("spanID: ", spanID);

            let spanText = bookRow[i].innerText;
            console.log("spanText: ", spanText);

            console.log("spanText == bookName ", spanText == bookName)
            if(spanText == bookName) {
                foundBook = spanID;
                break;
            }

        }

        if(foundBook){
            break;
        }
    }

    return foundBook;
}

console.log("Book: ", FindBookByName("Photo 1-4\'s Name"));