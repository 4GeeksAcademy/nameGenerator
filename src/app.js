let pronom = ["the", "our", "my", "your"];
let adj = ["great", "big", "small", "tiny"];
let noun = ["jogger", "racoon", "dog", "cat"];
let ext = [".com", ".net", ".us", ".io"];

let result = "";

for (let i = 0; i <pronom.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            for (let l = 0; l < ext.length; l++) {
                result += pronom[i] + adj[j] + noun[k] + ext[l] + "<br>";
            }
        }
    }
}

document.querySelector("#app").innerHTML = result;