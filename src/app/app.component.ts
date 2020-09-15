import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearnAngular5';

  query: string;
  artists: Object;          //Should be of the Type Artist

  constructor(private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/seeddata/artists.json')   //Getting data from an external json file          //Should be of the Type Artist not Object
      .subscribe(data => {
        this.artists = data;   //Seed data to the artists list
      })
  }

  public showArtist(artist) {
    this.query = artist.name;
    artist.highlight = !artist.highlight;   //Highlight the artists that were already choosed
  }


}
