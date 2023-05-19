document.getElementById('comment-box-post-button').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameFieldText = nameField.value;
    // console.log(nameFieldText);
    const commentField = document.getElementById('comment-box');
    const commentFieldText = commentField.value;
    // console.log(commentFieldText);
    const userName = document.createElement('h4');
    userName.innerText = nameFieldText;
    const userComment = document.createElement('p');
    userComment.innerText = commentFieldText;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(userName);
    commentContainer.appendChild(userComment);
    nameField.value = '';
    commentField.value = '';
});