import { CUSTOM_ELEMENTS_SCHEMA, Component, NgModule, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ConfigService } from '../config.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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
    FormsModule,
    CommonModule,
  ],
})
export class HomePage {
  configData: any[] = [];
  editableConfig: any

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.loadConfig().then((data) => {
      for (const section in data) {
        if (data.hasOwnProperty(section)) {
          this.configData.push({
            section: section,
            items: data[section],
          });
        }
      }
      console.log(this.configData);
    });
  }

  saveChanges() {
    console.log(this.editableConfig);
  }
}
