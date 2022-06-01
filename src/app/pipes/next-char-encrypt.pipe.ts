import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nextCharEncrypt'
})
export class NextCharEncryptPipe implements PipeTransform {

 
  transform(value: string, active: boolean): string {
    if (!active) {
      return value;
    } else {
      const encrypt: String[] = [];
      value.split('').forEach((word: string) => {
        if (word === ' ') {
          encrypt.push(word);
        } else {
          encrypt.push(String.fromCharCode(word.charCodeAt(0) + 1));
        }
      });
      return encrypt.join('');
    }
  }

}
