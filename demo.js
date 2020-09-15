var wrapper = document.querySelector('.wrapper');
wrapper.onclick = function (e){
    console.log(e);
    if(e.target.tagName === 'LI') {
        e.target.classList.add('active');
        wrapper.classList.add('activeWrapper');
    }else if(e.target.classList.contains('close')){

        var parentLi = getLiParent(e.target);
        parentLi.classList.remove('active');
        

        wrapper.classList.remove('activeWrapper');
    }
}


function getLiParent(node){
    var parent = node.parentNode;
    while(!parent.classList.contains('item')&& parent !== document.body){
        parent = parent.parentNode;
    }
    return parent;
}