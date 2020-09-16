import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { empty, EMPTY } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearnAngular5';

  query: string;
  artists: Object;          //Should be of the Type Artist
  currentArtist: Object;  //Should be of the Type Artist

  constructor(private http: HttpClient) {
    this.query = '';
  }

  ngOnInit(): void {
    this.http.get<Object>('../assets/seeddata/artists.json')   //Getting data from an external json file          //Should be of the Type Artist not Object
      .subscribe(data => {
        this.artists = data;   //Seed data to the artists list
      })
  }

  public showArtist(item) {
    this.query = item.name;
    item.highlight = !item.highlight;   //Highlight the artists that were already choosed
    this.currentArtist = item;          //Defines the selected artist
    this.query = "";
  }
}
