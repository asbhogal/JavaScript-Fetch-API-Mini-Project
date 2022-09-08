    fetch('bison-plains.jpeg')                      // FETCH THE IMAGE FILE...
        .then(response => {                         // ...THEN HANDLE THE PROMISE WITH A RESPONSE...
            console.log(response);                  // ...LOG THE DATA STREAM STORED IN THE RESPONSE IN THE CONSOLE LOG
            return response.blob();                 // CONVERT THE RESPONSE INTO AN IMAGE BLOB. THIS TRIGGERS ANOTHER PROMISE.
        })
        .then(blob => {                             // CHAIN THE RESPONSES USING then (AND CREATE A NEW VARIABLE CALLED blob)
            console.log(blob);                      // THE RESPONSE TO THE SECOND PROMISE
            document.getElementById('bison-plains').src = URL.createObjectURL(blob);      
        });

        // SIMPLY PUT,:
            //  1. FETCH THE IMAGE
            //  2. LOOK AT THE RESOLVED PROMISE
            //  3. COMPLETE READING THE STREAM OF DATA INTO A blob

// 1. CODE CALLS THE fetch FUNCTION WHICH WILL GIVE A SINGLE ARGUMENT - THE PATH TO THE RESOURCE (IN THIS CASE, AN IMAGE FILE PATH)
// 2. HANDLE THE SUBSEQUENT RESPONSE WITH THE DATA (ASSUMING SUCCESS) - INVOLVES A PROMISE RETURNED BY THE fetch. A PROMISE IS A WAY IN JS TO HANDLE AN ASYNCHRONOUS EVENT. THIS EVENT IS RESOLVED WHEN THE EVENT IS OVER AND THE DATA IS RETRIEVED. A 'FAIL-SAFE' IS ALSO CODED SHOULD AN ERROR BE RETURNED.
// 3. READ THE DATA RETURNED AND STORE IT IN A FORMAT THAT CAN BE WORKED WITH (e.g. TEXT, BLOB (IMAGE), ARRAY BUFFER, JSON etc.) FROM THE RESPONSE BODY. IN THIS CASE, IT INVOLVES CONVERTING THE DATA INTO A BLOB, WHICH TRIGGERS ANOTHER PROMISE. THIS CAN THEN BE CHAINED WITH ANOTHER .then
// 4. MAKE AN IMG HTML DOM ELEMENT WITH THE DATA RETURNED
// N.B. THE fetch OCCURS ASYNCHRONOUSLY, ie. TIME IS TAKEN TO RETRIEVE THE DATA FROM WHEN THE FUNCTION IS CALLED