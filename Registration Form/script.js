var telPtrn=/^(\d{3})[ ](\d{3})[ ](\d{4})$/g ;

var Name1=document.getElementById("name1"),
Name2=document.getElementById("name2"),
regNo=document.getElementById("reg-no"),
tel=document.getElementById("tel"),
email=document.getElementById("email"),
date=document.getElementById("date"),
fb=document.getElementById("facebook"),
ig=document.getElementById("instagram"),
wp=document.getElementById("whatsapp"),
gh=document.getElementById("github"),
branch=document.getElementById('branch'),
otherCourse=document.getElementById('other1'),
otherDomain=document.getElementById('other2');

tel.addEventListener('change',function(e){
    let numberCheck=document.getElementById("numberCheck");
    if(!telPtrn.test(e.target.value))
    {
        numberCheck.textContent="Number should be in in the given format.";
    }
    else
    {
        numberCheck.textContent="";
    }
});

wp.addEventListener('change',function(e){
    let wpNumberCheck=document.getElementById("wpNumberCheck");
    if(!telPtrn.test(e.target.value))
    {
        wpNumberCheck.textContent="Number should be in in the given format.";
    }
    else
    {
        wpNumberCheck.textContent="";
    }
});

document.addEventListener('change',function(){
    localStorage.setItem('other1',otherCourse.value);
    localStorage.setItem('other2',otherDomain.value);
    localStorage.setItem('name1',Name1.value);
    localStorage.setItem('name2',Name2.value);
    localStorage.setItem('regNo',regNo.value);
    localStorage.setItem('tel',tel.value);
    localStorage.setItem('branch',branch.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('date',date.value);
    localStorage.setItem('fb',fb.value);
    localStorage.setItem('ig',ig.value);
    localStorage.setItem('wp',wp.value);
    localStorage.setItem('gh',gh.value);
    localStorage.setItem("submit",0);
});

var submit=localStorage.getItem("submit");

if(submit==0)
{
    otherCourse.value=localStorage.getItem('other1');
    otherDomain.value=localStorage.getItem('other2');
    Name1.value=localStorage.getItem('name1');
    Name2.value=localStorage.getItem('name2');
    regNo.value=localStorage.getItem('regNo');
    tel.value=localStorage.getItem('tel');
    branch.value=localStorage.getItem('branch');
    email.value=localStorage.getItem('email');
    date.value=localStorage.getItem('date');
    fb.value=localStorage.getItem('fb');
    ig.value=localStorage.getItem('ig');
    wp.value=localStorage.getItem('wp');
    gh.value=localStorage.getItem('gh');
}

function save()
{
    if(checked())
    {
    localStorage.setItem('other1',otherCourse.value);
    localStorage.setItem('other2',otherDomain.value);
    localStorage.setItem('name1',Name1.value);
    localStorage.setItem('name2',Name2.value);
    localStorage.setItem('regNo',regNo.value);
    localStorage.setItem('tel',tel.value);
    localStorage.setItem('branch',branch.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('date',date.value);
    localStorage.setItem('fb',fb.value);
    localStorage.setItem('ig',ig.value);
    localStorage.setItem('wp',wp.value);
    localStorage.setItem('gh',gh.value);
    localStorage.setItem('submit',1);
    }
}

function checked()
{
    if(Name1.value=='' || regNo.value=='' || tel.value==''||email.value==''||date.value=='')
    {
        alert("Please fill all required sections.");
        return false;
    }
    return true;
}




