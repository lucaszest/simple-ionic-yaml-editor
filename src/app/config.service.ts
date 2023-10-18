import { Injectable } from '@angular/core';
import * as yaml from 'js-yaml';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configData: any;

  constructor(private http: HttpClient) { }

  async loadConfig() {
    try {
      const response = await this.http.get('../assets/config.yaml', { responseType: 'text' }).toPromise() || 'error';
      this.configData = yaml.load(response);
      //console.log(this.configData);
      return this.configData;
    } catch (error) {
      console.error('Erro ao carregar o arquivo de configuração:', error);
      throw error; // Rejeitar a Promessa em caso de erro
    }
  }


  getConfig() {
    return this.configData;
  }
}
