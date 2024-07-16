import { DefaultUrlSerializer, UrlTree } from '@angular/router';

export class CustomUrlSerializer extends DefaultUrlSerializer {
    override parse(url: string): UrlTree {
      // Lógica para preservar hifens em nomes de pastas e assets
      return super.parse(url.replace(/-/g, '%2F'));
    }
  }