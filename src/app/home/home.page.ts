import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ConfigService } from '../config.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    FormsModule
  ],
})
export class HomePage {
  configData: any;
  editableConfig: any

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.loadConfig()
      .then((configData) => {
        console.log('loaded:', configData);
        this.configData = configData; // Você pode usar os dados aqui
        this.editableConfig = JSON.parse(JSON.stringify(configData));
      })
      .catch((error) => {
        console.error('Erro ao carregar configurações:', error);
      });
  }

  saveChanges() {
    console.log(this.editableConfig);
  }
}
