let phoneNumber ='+71234567890';
let phoneFormatted ='';

function formattedPhone(phone) {
    for (let i = 0; i<phoneNumber.length;i++){
        phoneFormatted += phoneNumber.charAt(i);
        if(i==1){
            phoneFormatted+=' '+'(';            
        }
        if(i==4){
            phoneFormatted+=')'+' ';
        }
        if(i==7|i==9){
            phoneFormatted+='-';
        }
        
    }
    return phoneFormatted;
}   
    

console.log(formattedPhone('+71234567890'));