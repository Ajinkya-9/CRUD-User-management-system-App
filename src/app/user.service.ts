import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 rootUrl = 'http://localhost:3000/users/';
  constructor(private http: HttpClient , private route: Router) { }

getUserData(): Observable<any> {
  return this.http.get(this.rootUrl);
}

postUserData(data): Observable <any> {
const body = {
  name: data.name,
  gender: data.gender,
  phone: data.phone,
  contactPreferance: data.contactPreferance,
  email: data.email,
  dateOfBirth: data.dateOfBirth,
  department: data.department,
  isActive: data.isActive,
};
  return this.http.post(this.rootUrl, body);
}

editeUserData(editedData , id ): Observable<any> {
  console.log('id is counming' + ' ' + id);
 const editBody = {
  name: editedData.name,
  gender: editedData.gender,
  phone: editedData.phone,
  contactPreferance: editedData.contactPreferance,
  email: editedData.email,
  dateOfBirth: editedData.dateOfBirth,
  department: editedData.department,
  isActive: editedData.isActive,
 };
  return this.http.put(this.rootUrl + id , editBody );
}

deletUser(id): Observable <any> {
return  this.http.delete(this.rootUrl + id);
}

}
