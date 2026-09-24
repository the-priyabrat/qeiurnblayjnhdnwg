import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser'

@Injectable({
  providedIn: 'root'
})
export class EmailJSService {

  constructor() { }

  private serviceId = 'service_qqkmo1p';
  private templateId = 'template_n4fj5al';
  private publicKey = 'beN2at3UP_WWZWPgq';

  sendEmail(message: any) {
    const templateParams = {
      message: `New visit with ip ${message.ip} from ${message.city} \n Co-ordinate: ${message.location}`
    };

    return emailjs.send(
      this.serviceId,
      this.templateId,
      templateParams,
      {
        publicKey: this.publicKey
      }
    );
  }
}
