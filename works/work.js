var signupBtn = document.querySelector('.signupBtn');
var loginBtn = document.querySelector('.loginBtn');
var signup = document.getElementById('signup');
var login = document.getElementById('login');

var inp = document.getElementsByTagName('input');
var label = document.querySelectorAll('label');
var body = document.body;

// click login
var nLogin = document.querySelectorAll('.n-login');
var form = document.querySelector('.form-wrapper');
var loginClick = document.querySelector('.login');
body.addEventListener('click',closeLogin,false);


for(var i=0;i<nLogin.length;i++){
    nLogin[i].onclick = function(){
        if( this.classList.contains('n-login')){
            form.style.display = 'block'; 
        }else if(!this.classList.contains('n-login')){
            form.style.display = 'none';
        }
    }
}

function closeLogin(e){
    console.log(e)
    if( e.path.length == '5'){
        form.style.display = 'none';
    }
}

// signup & login
signupBtn.onclick = function(){
    signup.style.display = 'block';
    signupBtn.classList.add('active');
    login.style.display = 'none';
    loginBtn.classList.remove('active');
}
loginBtn.onclick = function(){
    login.style.display = 'block';
    loginBtn.classList.add('active');
    signup.style.display = 'none';
    signupBtn.classList.remove('active');
}

//form textarea
for(var i=0;i<inp.length;i++){
    inp[i].onkeyup = function(e){
        
        if(this.value !== ""){
            this.previousElementSibling.classList.add('active');
        }else{
            this.previousElementSibling.classList.remove('active');
        }
    }
}

// down menu
var down = document.querySelector('.fa-caret-down');
var downMenu = document.querySelector('.downMenu');
down.addEventListener('click',dropDown,false);

var isShow = false;
var c = null;

function dropDown(e){
    e.stopPropagation();
    isShow = !isShow;
    downMenu.style.display = isShow ? 'block' : 'none';   
}

document.onclick = function(){
    isShow = false;
    downMenu.style.display = 'none';
}

// navbarMenu
var menuIcon = document.querySelector('.menu-icon');
var navbarMenu = document.querySelector('.navbarMenu');
var body = document.body;

menuIcon.addEventListener('click',openMenu,false);
body.addEventListener('click',closeMenu,false);

function openMenu(e){
    navbarMenu.style.display = 'block';
}
function closeMenu(e){
    if(e.target.nodeName !== "A" && e.target.nodeName !== "I"){
        navbarMenu.style.display = 'none';
    }
}

// follow
var follow = document.querySelector('.follow');
follow.addEventListener('click',getFollowInfo,false);
follow.addEventListener('click',checkFollow,false);
var checkF = false;

function getFollowInfo(){
    var head = document.querySelector('.head').style.backgroundImage;
    var followName = document.querySelector('.name').innerHTML;
    var url = head.split('"');
    localStorage.setItem('follow-head',url[1]);
    localStorage.setItem('follow-name',followName);
}

function checkFollow(){
    if( this.classList.contains('n-login')){
        return
    }
    checkF = !checkF;
    checkF? follow.classList.add('follow-active') : follow.classList.remove('follow-active')
}

// heart
var heart = document.querySelector('.heart');
var heartNum = document.querySelector('.heart-num');
var heartNumNow = heartNum.innerHTML;
var heartCheck = false;
heart.addEventListener('click',heartClick,false);

function heartClick(){
    if(user.innerHTML !== ''){
        heartCheck = !heartCheck;
        console.log((parseInt(heartNumNow))+ 1);
        heartCheck? heartNum.innerHTML = (parseInt(heartNumNow))+ 1 : heartNum.innerHTML = (parseInt(heartNumNow));
        heartCheck? heart.style.color = 'rgb(247, 91, 91)':heart.style.color = '#bbb'
    }   
}

// comment
var comment = document.querySelector('.comment');
var commentText = document.querySelector('.comment-text');
var commentNum =document.querySelector('.comment-num');
var commentNumNow = commentNum.innerHTML;
comment.addEventListener('click',commentClick,false);
commentText.addEventListener('keydown',textNum,false);

var newUser = document.querySelector('.new');
var newName = document.querySelector('.new-name');
var newResponse = document.querySelector('.new-response');
var edit = document.querySelector('.fa-edit');
var response = document.querySelector('.response');
var newC = document.querySelector('.new-c');

// 打開commentText
function commentClick(){
    if(comment.classList.contains('n-login')){
        commentText.style.display = 'none'
    }else{
        commentText.style.display = 'block'
    }    
}
// commentText高度變2
function textNum(e){
    if(e.target.textLength>e.target.cols){
        commentText.rows = '2'
    }
    // 出現留言
    if(e.keyCode == 13){
        newUser.style.display = 'block';
        newName.innerHTML = user.innerHTML;
        newResponse.textContent = commentText.value;
        commentText.value = null;
        commentNum.innerHTML = (parseInt(commentNumNow))+ 1 ;
        edit.style.display = 'block'
    }   
}

// edit
edit.onclick = function(){
    var textR = newResponse.innerHTML;
    newResponse.style.display = 'none';
    var textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.setAttribute('class','edit');
    textBox.value = textR;
    newC.appendChild(textBox);

    textBox.onkeydown = function(e){
        if(e.keyCode == 13){
            var edit2 = textBox.value;
            textBox.style.display = 'none';
            newResponse.style.display = 'block';
            newResponse.innerHTML = edit2;
        }
    }
}

// log out
var logOut = document.querySelector('.log-out');
logOut.onclick = function(e){
    console.log(e);
    for(var i=0;i<nLogin.length;i++){
        nLogin[i].classList.add('n-login') 
    }   
    commentText.style.display = 'none';
    form.style.display = 'block';
    userMenu.style.color = "#212529";
    loginClick.style.display = 'block';
    user.innerHTML = '';
}