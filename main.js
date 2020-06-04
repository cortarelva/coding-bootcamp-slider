

testimony = {
    'user1':{'name': 'Tanya Sinclair','role':'UX Engineer','photo':'url(./images/image-tanya.jpg)',
    'text':'“ I’ve been interested in coding for a while <br/> but never taken the jump, until now. I<br/> couldn’t recommend this course enough.<br/> I’m now in the job of my dreams and so<br/> excited about the future. ”'},
    'user2':{'name':'John Tarkpor','role':'Junior Front-end Developer','photo':'url(./images/image-john.jpg)',
    'text':'“ If you want to lay the best foundation<br/> possible I’d recommend taking this<br/> course. The depth the instructors go into<br/> is incredible. I now feel so confident about<br/> starting up as a professional developer. ”'}
}



//photo
const user1Photo = testimony.user1.photo;
const user2Photo = testimony.user2.photo;

//text
const user1Testimony = testimony.user1.text;
const user2Testimony = testimony.user2.text;

//name
const user1Signature = testimony.user1.name;
const user2Signature = testimony.user2.name;

//role
const user1Role = testimony.user1.role;
const user2Role = testimony.user2.role;





function sliderUser1(){
    document.getElementById('photo').style.backgroundImage = user1Photo;
    document.getElementById('testimony').innerHTML = user1Testimony;
    document.getElementById('name').innerHTML = user1Signature;
    document.getElementById('role').innerText = user1Role;
}


function sliderUser2(){
    document.getElementById('photo').style.backgroundImage = user2Photo;
    document.getElementById('testimony').innerHTML = user2Testimony;
    document.getElementById('name').innerHTML = user2Signature;
    document.getElementById('role').innerText = user2Role;
}

window.onload(sliderUser1());

btnNext.addEventListener('click', sliderUser2);
 
btnPrev.addEventListener('click', sliderUser1);
    

