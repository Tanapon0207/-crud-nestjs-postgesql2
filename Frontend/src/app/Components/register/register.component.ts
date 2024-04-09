import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  username: string;
  password: string;



  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.phone = '';
    this.username = '';
    this.password = '';
  }



  register() {

    const data_user = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      username: this.username,
      password: this.password
    }

    if (data_user.firstname != '' && data_user.lastname != '' && data_user.email != '' && data_user.phone != '' && data_user.username != '' && data_user.password != '') {
      this.http.post('http://localhost:3000/user', data_user).subscribe((response) => {
        Swal.fire(
          'Register สำเร็จ!',
          'ลงทะเบียนเรียบร้อยเเล้ว!',
          'success'

        )
        console.log(response);
        this.router.navigate(['/login']);
      });
    } else {
      Swal.fire(
        'Register ไม่สำเร็จ!',
        'กรุณากรอกข้อมูลให้ครบถ้วน!',
        'error'
      )
    }



  }


}
