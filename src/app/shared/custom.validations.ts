// import { FormControl } from '@angular/forms';
// var data:any

// export function email(control:FormControl){
//     if(!control.value){return null}
//     if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(control.value)){
//         return null
//     }
//     else{
//         return {"email":true}
//     }
// }
// export function cpassword(control:UntypedFormControl){
//     if(!control.value){return null}
//     if(data==control.value)
//     {
//         return null
//     }
//     else{
//         return {'cpassword':true}
//     }
// }

// export function password(control:UntypedFormControl){
//     if(!control.value){return null}
//     if((/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(control.value))
//     {
//     data = control.value;
//         return null
//     }
//     else{
//         return {'password':true}
//     }
// }

// export function number(control:UntypedFormControl){
//     if(!control.value) {return null;}
//     if((/^[0-9]*$/g).test(control.value)){
//       return null;
//     }
//     else{
//       return {"number":true}
//     }
//   }

//   export function onlyCharacters(control: FormControl) {
//     if (!control.value) { return null; }
//     if (/^([ a-zA-Z]*)$/.test(control.value)) {
//         return null;
//     } else {
//         return { "onlyCharacters": true }
//     }
// }



// export function month(control: UntypedFormControl) {
//     if (!control.value) { return null; }
//     if (/^(0?[1-9]|1[012])$/.test(control.value)) {
//         return null;
//     } else {
//         return { "month": true };
//     }
// }


// export function year(control: UntypedFormControl) {
//     if (!control.value) { return null; }
//     if (/^(19[5-9]\d|20[0-4]\d|2050)$/.test(control.value)) {
//         return null;
//     } else {
//         return { "year": true };
//     }
// }


// export function noExtraWhiteSpace(control: UntypedFormControl) {
//     if (!control.value) { return null; }
//     // if (/^([a-zA-Z0-9!|@#$&%*(){}\/-_`.+,/\"]+\s)*([a-zA-Z0-9!|@#$&%(){}*\/-_`.+,/\"]+)$/.test(control.value)) {
//     if (/^[^\s]+(\s+[^\s]+)*$/.test(control.value)) {
//         return null;
//     } else {
//         return { "noextrawhitespace": true };
//     }
// }