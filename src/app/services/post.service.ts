import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PostService {
  nblove:number;
  posts = [
    {
      titre: 'Mon premier Post',
      contenu: 'Angular est géré par Google — il y a donc peu de chances qu’il disparaisse, et l’équipe de développement du framework est excellente.'
      
    },
    {
      titre: 'Mon deuxieme post',
      contenu: 'Le TypeScript — ce langage permet un développement beaucoup plus stable, rapide et facile.'
    },
    {
      titre: 'Un autre post',
      contenu: 'éteLe framework Ionic — le framework permettant le développement d’applications mobiles multi-plateformes à partir d’une seule base de code — utilise Angular'
    }
  ];
  constructor(private httpClient: HttpClient) {

   
   }

  savePostToServer() {
    this.httpClient
      .post('https://blog-9157b.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
enregistrerNblove(nblove:any)
{
  this.httpClient
  .post('https://blog-9157b.firebaseio.com/nblove.json',nblove)
  .subscribe(
    () => {
      console.log('Enregistrement terminé !');
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );

}

getPosts() {
  this.httpClient
  .get<any[]>('https://blog-9157b.firebaseio.com/posts.json')
  .subscribe(
    (response) => {
      this.posts = response;
    },
    (error) => {
      console.log('Erreur ! : ' + error);
    }
  );
}



}
