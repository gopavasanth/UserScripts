// This user script adds 3D Models button after Videos on Wikimedia Commons which will help navigate users to 3D Models on Commons.

$(document).ready(function() {
    var newLi = document.createElement('li');
    var newLink = document.createElement('a');
    newLink.href = '/wiki/Category:3D_models';
    newLink.title = 'Category:3D models';
    newLink.textContent = '3D Models';
    newLi.appendChild(newLink);

    var mainpageActions = document.querySelector('.mainpage-actions');
    if (mainpageActions) {
        var ul = mainpageActions.querySelector('ul');
        if (ul) {
            var videosLi = ul.querySelector('li > a[href="/wiki/Category:Videos"]');
            if (videosLi) {
                ul.insertBefore(newLi, videosLi.parentNode.nextSibling);
            }
        }
    }
});