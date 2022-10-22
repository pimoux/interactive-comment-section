fetch("data.json")
.then(res => res.json())
.then(res => {
    const mainContent = document.querySelector(".content");
    res.comments.forEach(comment => {
        const commentUserElement = document.createElement("div");
        commentUserElement.classList.add("comment-container");

        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const userElement = document.createElement("div");
        userElement.classList.add("user");

        const userAvatar = document.createElement("img");
        userAvatar.classList.add("user-img");
        userAvatar.src = comment.user.image.webp;
        userAvatar.alt = comment.user.username;

        const username = document.createElement("p");
        username.textContent = comment.user.username;
        username.classList.add("user-name");

        const commentPublicationDate = document.createElement("p");
        commentPublicationDate.textContent = comment.createdAt;
        commentPublicationDate.classList.add("comment-publication-date");

        const commentContent = document.createElement("p");
        commentContent.textContent = comment.content;
        commentContent.classList.add("comment-content");

        const commentFooter = document.createElement("div");
        commentFooter.classList.add("comment-footer");

        const repliedButtons = document.createElement("div");
        repliedButtons.classList.add("replied-buttons");

        const plusButton = document.createElement("button");
        plusButton.classList.add("plus-button");

        const plusButtonImg = document.createElement("img");
        plusButtonImg.src = "/images/icon-plus.svg";
        plusButtonImg.alt = "plus icon";

        const commentScore = document.createElement("span");
        commentScore.classList.add("comment-score");
        commentScore.textContent = comment.score;

        const minusButton = document.createElement("button");
        minusButton.classList.add("minus-button");

        const minusButtonImg = document.createElement("img");
        minusButtonImg.src = "/images/icon-minus.svg";
        minusButtonImg.alt = "minus icon";

        const replyDiv = document.createElement("div");
        replyDiv.classList.add("reply");

        const replyIcon = document.createElement("img");
        replyIcon.classList.add("reply-icon");
        replyIcon.src = "/images/icon-reply.svg";
        replyIcon.alt = "reply-icon";

        const replyText = document.createElement("p");
        replyText.classList.add("reply-text");
        replyText.textContent = "Reply";

        replyDiv.appendChild(replyIcon);
        replyDiv.appendChild(replyText);

        plusButton.appendChild(plusButtonImg);
        minusButton.appendChild(minusButtonImg);

        repliedButtons.appendChild(plusButton);
        repliedButtons.appendChild(commentScore);
        repliedButtons.appendChild(minusButton);

        commentFooter.appendChild(repliedButtons);
        commentFooter.appendChild(replyDiv);

        userElement.appendChild(userAvatar);
        userElement.appendChild(username);
        userElement.appendChild(commentPublicationDate);

        commentElement.appendChild(userElement);
        commentElement.appendChild(commentContent);
        commentElement.appendChild(commentFooter);

        commentUserElement.appendChild(commentElement);

        mainContent.appendChild(commentUserElement);
    });
});