function createMessage (options){
    const msg = document.createElement('div');
    if(options.owner === 0){
        msg.classList.add('message--owner');
    }
    const msgText = document.createElement('div');
    msgText.classList.add('message__text');
    
    msg.appendChild(msgText);
}