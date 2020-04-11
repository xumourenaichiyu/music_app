export function tipToast(text,time){
    let toast = document.createElement('div');
    toast.style.position = 'absolute';
    toast.style.top = '0';
    // toast.style.bottom='0';
    toast.style.left = '0';
    // toast.style.right = '0';
    toast.style.width='100%';
    toast.style.height='100%';
    toast.style.textAlign='center'
    toast.innerHTML=`
    <div style='padding:10px;background:rgba(0,0,0,.7);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:5px;color:#fff'>
        ${text}
    </div>`
    document.body.appendChild(toast);
    setTimeout(()=>{
        document.body.removeChild(toast)
    },time)
}