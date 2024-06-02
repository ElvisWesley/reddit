import React from "react";

const subreddit = "popular";
export const getPosts = () => {
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.data.children.map((child) => child.data);
        });
}