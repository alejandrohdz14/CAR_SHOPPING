import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
  


@Injectable()
export class Service{
   
    constructor(public alertCtrl: AlertController,
                private toastCtrl: ToastController){}

    Alert(title, subtitle){
        let alert = this.alertCtrl.create({
          title: title,
          subTitle: subtitle,
          buttons: ['OK']
        });
        alert.present();
      }

      /**
       * persentToast()   METHOD
       * es una notificacion sutil, puede utilizrse
       * para proporcinar comentarios sobre una operacion
       * o mostrar un mensaje de sistema
       * @param message // mensaje que se quiere mostrar
       * @param time  //tiempo de duracion del toast
       * @param position  // desde donde se mostrara el toast
       */
      presentToast(message, time, position){
          let toast = this.toastCtrl.create({
              message: message,
              duration: time,
              position: position
          });
          toast.onDidDismiss(() => {
              console.log('Dismissed toast')
          })
      }

    /**
     * notNullValueLogin
     */
    public notNullValueLogin(json) {
        let username = json.username , password = json.password;
        if(username == '' && password == ''){
            this.Alert('A ocuarrido un error',' Debes de llenar todos los campos');
            return true;
        }
        else if(json.username == ''){
            this.Alert('Se deben de rellenar todos los campo','Te a faltado el nombre de usuario');
            return true;
        }
        else if(json.password == ''){
            this.Alert('Se deben de rellenar todos los campos','Te a faltado la contraseña');
            return true;
        }
    }

    public notNullValueSignUp(json){
        console.log(json);
		
		if(json.username=="" || json.name=="" || json.lastname=="" || json.email=="" || json.password=="" || json.confirPassword==""){
            this.Alert('Por favor llene todos los campos','OK para continuar');
            return true
        }
        else if(json.password != json.confirPassword){
            this.Alert('Las contraseñas introducidas no coinciden','Por favor intente de nuevo');   
            return true      
        }
		
    }

 
}