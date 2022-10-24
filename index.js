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
        if (comment.replies.length > 0) {
            const repliesContainer = document.createElement("div");
            repliesContainer.classList.add("replies-container");
            comment.replies.forEach(reply => {
                const replyContainer = document.createElement("div");
                replyContainer.classList.add("reply-container");

                const userElement = document.createElement("div");
                userElement.classList.add("user");

                const userAvatar = document.createElement("img");
                userAvatar.classList.add("user-img");
                userAvatar.src = reply.user.image.webp;
                userAvatar.alt = reply.user.username;

                const username = document.createElement("p");
                username.innerHTML = reply.user.username;
                username.classList.add("user-name");

                if (reply.user.username === res.currentUser.username) {
                    username.innerHTML = `${reply.user.username} <span class="reply-you">you</span>`;
                }

                const replyPublicationDate = document.createElement("p");
                replyPublicationDate.textContent = reply.createdAt;
                replyPublicationDate.classList.add("comment-publication-date");

                const replyContent = document.createElement("p");
                replyContent.innerHTML = `<span class="reply-tag">@${reply.replyingTo}</span> ${reply.content}`;
                replyContent.classList.add("comment-content");

                const replyFooter = document.createElement("div");
                replyFooter.classList.add("comment-footer");

                const repliedButtons = document.createElement("div");
                repliedButtons.classList.add("replied-buttons");

                const plusButton = document.createElement("button");
                plusButton.classList.add("plus-button");

                const plusButtonImg = document.createElement("img");
                plusButtonImg.src = "/images/icon-plus.svg";
                plusButtonImg.alt = "plus icon";

                const commentScore = document.createElement("span");
                commentScore.classList.add("comment-score");
                commentScore.textContent = reply.score;

                const minusButton = document.createElement("button");
                minusButton.classList.add("minus-button");

                const minusButtonImg = document.createElement("img");
                minusButtonImg.src = "/images/icon-minus.svg";
                minusButtonImg.alt = "minus icon";

                const replyDiv = document.createElement("div");
                replyDiv.classList.add("reply");
                if (reply.user.username === res.currentUser.username) {
                    const deleteIcon = document.createElement("img");
                    deleteIcon.classList.add("delete-icon");
                    deleteIcon.src = "/images/icon-delete.svg";
                    deleteIcon.alt = "delete-icon";
                    deleteIcon.addEventListener("click", toggleDeleteModal);

                    const deleteText = document.createElement("p");
                    deleteText.classList.add("delete-text");
                    deleteText.textContent = "Delete";
                    deleteText.addEventListener("click", toggleDeleteModal);

                    const editIcon = document.createElement("img");
                    editIcon.classList.add("edit-icon");
                    editIcon.src = "/images/icon-edit.svg";
                    editIcon.alt = "edit-icon";

                    const editText = document.createElement("p");
                    editText.classList.add("edit-text");
                    editText.textContent = "Edit";

                    replyDiv.appendChild(deleteIcon);
                    replyDiv.appendChild(deleteText);
                    replyDiv.appendChild(editIcon);
                    replyDiv.appendChild(editText);
                } else {
                    const replyIcon = document.createElement("img");
                    replyIcon.classList.add("reply-icon");
                    replyIcon.src = "/images/icon-reply.svg";
                    replyIcon.alt = "reply-icon";

                    const replyText = document.createElement("p");
                    replyText.classList.add("reply-text");
                    replyText.textContent = "Reply";

                    replyDiv.appendChild(replyIcon);
                    replyDiv.appendChild(replyText);
                }

                plusButton.appendChild(plusButtonImg);
                minusButton.appendChild(minusButtonImg);

                repliedButtons.appendChild(plusButton);
                repliedButtons.appendChild(commentScore);
                repliedButtons.appendChild(minusButton);

                replyFooter.appendChild(repliedButtons);
                replyFooter.appendChild(replyDiv);

                userElement.appendChild(userAvatar);
                userElement.appendChild(username);
                userElement.appendChild(replyPublicationDate);

                replyContainer.appendChild(userElement);
                replyContainer.appendChild(replyContent);
                replyContainer.appendChild(replyFooter);

                repliesContainer.appendChild(replyContainer);

                const sender = document.querySelector(".user-profile-send-comment");
                sender.src = res.currentUser.image.png;

                const choices = [document.querySelector(".modal-cancel"), document.querySelector(".modal-delete")];
                choices.forEach(elt => elt.addEventListener("click", toggleDeleteModal));
            });

            commentUserElement.appendChild(repliesContainer);
        }

        mainContent.appendChild(commentUserElement);
    });
});

const toggleDeleteModal = () => {
    document.querySelector(".modal").classList.toggle("active");
}