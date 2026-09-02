export const postsUrl = "https://jsonplaceholder.typicode.com/posts";

export function showResult(type, message) {
    const results = document.getElementById("api-results");

    if (results) {
        const resultItem = document.createElement("p");

        resultItem.innerHTML = `<b>${type}:</b> ${message}`;

        results.appendChild(resultItem);
    }
}
