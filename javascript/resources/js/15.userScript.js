function validate() {
const IDvalue=document.getElementById('userId').value;
const PWvalue=document.getElementById('userPw').value;
const PWcheck=document.getElementById('checkPw').value;
const Uname=document.getElementById('name').value;
const Email=document.getElementById('email').value;
const Hobby=document.getElementById('hobby').value;
const Add=document.getElementById('addr').value;

let ID = /^[a-zA-Z][a-zA-Z0-9]{4,12}$/;
let PW = /^[a-zA-Z0-9!@#$%^&*]{8,15}$/;
let UN = /^[가-힣]{2,}$/;
let EM = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/;
let HB = /^[가-힣]+$/;


    if(ID.test(IDvalue)) {
        if(PW.test(PWvalue)){
            if(PWvalue==PWcheck){
                if(UN.test(Uname)){
                    if(EM.test(Email)){
                        if(HB.test(Hobby)){
                            alert('회원가입 완료');
                            return true;
                        }else {
                            alert('한글로만 입력하시오.');
                            return false;
                        }
                    }else{
                        alert('이메일 형식에 맞춰 입력하시오.');
                        return false;
                    }
                }else{
                    alert('한글로만 이루어져 있어야 되며 2글자 이상으로 입력하시오.');
                    return false;
                }
            }else{
                alert('위의 비밀번호와 일치하게 입력하시오.');
                return false;
            }
        }else{
            alert('비밀번호는 영문자, 숫자, 특수문자(!@#$%^&*)로 총 8~15자로 입력하시오.');
            return false;
        }
    }else{
        alert('아이디는 첫글자는 반드시 영문자하고 영문자, 숫자 포함 총 4~12자로 입력하시오.');
        return false;
    }
}