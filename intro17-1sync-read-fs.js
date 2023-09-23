//Sync way of writting the code but you'll have issues when it gets too many.
const { readFile } =require('fs');
// readFile('./content/first.txt', 'utf8', (err, data) => {
//     if (err) {
//         return
//     }
//     console.log(data);
// })

//A better async way would be

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })       
    })
}

const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        console.log(first);
        //to read the second file
        const second = await getText('./content/second.txt');
        console.log(second);
    } catch (error) {
        console.log(error)
    }
}

start();

// getText('./content/first.txt').then((result) => console.log(result)).catch((err) => console.log(err));