import { postsUrl, showResult } from "./modules.js";

function getPosts() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", postsUrl, true);

    xhr.addEventListener("load", function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                const posts = JSON.parse(xhr.responseText);

                console.log("GET completed", posts);

                showResult("GET Request", `Loaded ${posts.length} posts.`);
            } catch (error) {
                console.error("Error while reading data:", error.message);
            }
        } else {
            console.error("GET failed. Status:", xhr.status);
            showResult("GET Request", "Request failed.");
        }
    });

    xhr.addEventListener("error", function () {
        console.error("Network error");
        showResult("GET Request", "Network error.");
    });

    xhr.send();
}

function createPost() {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", postsUrl, true);

    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.addEventListener("load", function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const post = JSON.parse(xhr.responseText);

            console.log("POST completed", post);

            showResult("POST Request", `New post created with ID ${post.id}.`);
        } else {
            showResult("POST Request", "Could not create the post.");
        }
    });

    xhr.addEventListener("error", function () {
        showResult("POST Request", "Network error.");
    });

    const postData = {
        title: "My new post",
        body: "This post was created with XMLHttpRequest",
        userId: 1
    };

    xhr.send(JSON.stringify(postData));
}

function updatePost(id) {
    const xhr = new XMLHttpRequest();

    xhr.open("PUT", `${postsUrl}/${id}`, true);

    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    xhr.addEventListener("load", function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const post = JSON.parse(xhr.responseText);

            console.log("PUT completed", post);

            showResult("PUT Request", `Post ${id} was updated.`);
        } else {
            showResult("PUT Request", "Could not update the post.");
        }
    });

    xhr.addEventListener("error", function () {
        showResult("PUT Request", "Network error.");
    });

    const newData = {
        id: id,
        title: "Changed post title",
        body: "The post was updated using PUT",
        userId: 1
    };

    xhr.send(JSON.stringify(newData));
}

function removePost(id) {
    const xhr = new XMLHttpRequest();

    xhr.open("DELETE", `${postsUrl}/${id}`, true);

    xhr.addEventListener("load", function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("DELETE completed");

            showResult("DELETE Request", `Post ${id} was deleted successfully.`);
        } else {
            showResult("DELETE Request", "Could not delete the post.");
        }
    });

    xhr.addEventListener("error", function () {
        showResult("DELETE Request", "Network error.");
    });

    xhr.send();
}

getPosts();
createPost();
updatePost(1);
removePost(1);
