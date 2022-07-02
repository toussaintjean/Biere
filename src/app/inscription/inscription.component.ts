import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  message: String = ""
  constructor(private route:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  inscription(user: object):void {
    //this.route.navigateByUrl('recherche')
    this.http.post("http://localhost:8086/user", user).subscribe({
      next: (data) => {
        console.log(data)
       // SendMailInscription();
        this.message = "Vous êtes désormais inscrit ! <br/>Veuillez patientez, vous allez être redirigé vers la page de connexion dans 5 secondes..."
        setTimeout(() => {
          this.route.navigateByUrl('connexionbis')
        }, 5000)
    },
    error: (err) => {console.log(err)}
  })
}

// sendMailInscirption(){
//   final String username = "biouclem@gmail.com";
// final String password = "tmbulgrapbykbsoi";



// Properties props = new Properties();
// props.put("mail.smtp.auth", "true");
// props.put("mail.smtp.starttls.enable", "true");
// props.put("mail.smtp.host", "smtp.gmail.com");
// props.put("mail.smtp.port", "587");
// props.put("mail.smtp.ssl.trust", "smtp.gmail.com");
// props.put("mail.smtp.ssl.protocols", "TLSv1.2");



// Session session = Session.getInstance(props,
// new javax.mail.Authenticator() {
// protected PasswordAuthentication getPasswordAuthentication() {
// return new PasswordAuthentication(username, password);
// }
// });



// try {



// Message message = new MimeMessage(session);
// message.setFrom(new InternetAddress("biouclem@gmail.com"));
// message.setRecipients(Message.RecipientType.TO,
// InternetAddress.parse(to));
// message.setSubject("Convocation Evaluation");
// message.setText(msg);
// Transport.send(message);


// }



// catch (MessagingException e)
// {
// // throw new RuntimeException(e);
// System.out.println(e.getMessage());
// }
// }
}

