function publishReview() {
    let name = document.addReview.name.value;
    let title = document.addReview.titleReview.value;
    let text = document.addReview.textReview.value;

    let newArticle = document.createElement('article');
    comments_block.append(newArticle);

    let nameH3  = document.createElement('h3');
    nameH3.innerHTML = name;
    newArticle.append(nameH3);
    
    let newP = document.createElement('p');
    let newStrong = document.createElement('strong');
    newStrong.innerHTML = title;
    newP.appendChild(newStrong);
    newArticle.append(newP);
    

    let newP2 = document.createElement('p');
    newP2.innerHTML = text;
    newArticle.append(newP2);

    
    document.addReview.name.value = "";
    document.addReview.titleReview.value = "";
    document.addReview.textReview.value = "";
}