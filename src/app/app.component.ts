import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Alfaza Satria Jalasena';
  alamat='Jln. Patriot Peterongan Jombang';

  tanggal=Date.now;
}