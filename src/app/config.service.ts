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

  async saveConfig(updatedConfig: any) {
    try {
      // Enviar os dados atualizados para o servidor
      const response = await this.http.post('URL_DO_SEU_ENDPOINT_API', updatedConfig).toPromise();
      console.log('Dados salvos com sucesso:', response);
      this.configData = updatedConfig; // Atualizar os dados locais
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      throw error;
    }
  }
}
