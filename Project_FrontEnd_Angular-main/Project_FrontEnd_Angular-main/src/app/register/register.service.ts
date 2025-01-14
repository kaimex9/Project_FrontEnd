import { NursesServiceService } from '../../services/nurses-service.service';

export function confirmPassword(name: string, password: string, password2: string): boolean{
    let num = NursesServiceService.nurses.length;

    if(password === password2){
        NursesServiceService.nurses.push({"id": num+1, "first_name": name, "last_name":"dasfasdf", "password": password});
        return true;
    }else{
        return false;
    }
    
}