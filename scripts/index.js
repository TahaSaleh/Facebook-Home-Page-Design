var imgFile=document.getElementsByName("imgFile");
var imgList=document.getElementsByClassName("imgs");
function getImg(){
 imgFile[0].click();
}
imgFile[0].addEventListener("change",function(){
    var img="<img src='' >";
    imgList[0].innerHTML +=img;
    readURL(this);
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imgList[imgList.length-2].attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

var posttext=document.getElementsByTagName("textarea");
var posts=document.getElementsByClassName("posts");
function post(e){
var divHeader="<div class='post'><div class='postHeader'><div><img src='images/myphoto.jpg'><h3>Taha khaled</h3></div><i class='fas fa-ellipsis-h'></i></div>";
var divContent=" <div class='postContent'><p>"+posttext[0].value+"</p><img src='images/myphoto.jpg'></div>";
var divFooter="<div class='postFooter'><div class='footerInfo'><div class='likes'> <i class='fas fa-heart'></i><p>13K</p></div><div class='share'><a href='#'>12K Comments</a><a href='#'>5.3K Shares</a></div></div><hr><div class='footerButtons'><button><i class='fas fa-thumbs-up'></i>Like</button><button><i class='far fa-comment-alt'></i>Comment</button><button><i class='fas fa-share'></i>Share</button></div><hr class='myHr'><div class='comments'><div class='createcomment'><img src='images/myphoto.jpg'><input type='text' name='comment' placeholder='Write a comment...'></div><div class='comment'><img src='images/myphoto.jpg'> <span> احلي مسا عليك يا ابوالصحاب😂😂😂</span></div></div></div></div>";
var post=divHeader+divContent+divFooter;
posts[0].innerHTML =post+posts[0].innerHTML;
}

//#region Append
    // var postHeader=document.createElement("div");
    // var headerDiv=document.createElement("div");
    // var img=document.createElement("img");
    // var h3=document.createElement("h3");
    // var text=document.createTextNode("Taha Saleh");
    // h3.appendChild(text);
    // headerDiv.appendChild(img);
    // headerDiv.appendChild(h3);
    // var icon=document.createElement("i");
    // icon.classList.add("fas");
    // icon.classList.add("fa-ellipsis-h");
    // postHeader.appendChild(headerDiv);
    // postHeader.appendChild(icon);
    // // --------------
    // var postContent=document.createElement("div");
    // var p=document.createElement("p");
    // var imgPost=document.createElement("img");
//#endregion