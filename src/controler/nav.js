let count = 0;
let navValidation = () => {
    document.querySelector('#navBtn').addEventListener('click', () => {
        if (count === 0) {
            document.querySelector('#smNav').classList.replace('hidden', 'flex');
            document.querySelector('#hideNav').classList.replace('hidden', 'flex');
            
            count = 1;
        }
        else {
            document.querySelector('#smNav').classList.replace('flex','hidden');
            document.querySelector('#hideNav').classList.replace('flex','hidden');
            count = 0;
        }
    });
    document.querySelector('#smNav').addEventListener('click', () => {
        document.querySelector('#smNav').classList.replace('flex','hidden');
        document.querySelector('#hideNav').classList.replace('flex','hidden');
        
        count = 0;
        
    });
    document.querySelector('#hideNav').addEventListener('click', () => {
        document.querySelector('#smNav').classList.replace('flex','hidden');
        document.querySelector('#hideNav').classList.replace('flex','hidden');
            count = 0;        
    });

}


export default navValidation;