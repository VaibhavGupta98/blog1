import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.id){
      this.desc = this.arr['id'];
    }
  }

  posts = [
    {id: 1, heading: 'First post' , date: '12/12/2018', description: 'this is first post description'},
    {id: 2, heading: 'Second post' , date: '25/12/2018', description: 'this is second post description'},
    {id: 3, heading: 'Third post' , date: '12/1/2019', description: 'this is Third post description'}
  ]

  arr = [
    {1: " This is the first blog. It will conttain complete described paragraph."},
    {2: " This is the first blog. It will conttain complete described paragraph."},
    {3: " This is the first blog. It will conttain complete described paragraph."}
  ]

  id: string;

  desc: string ;

  openPost(id){
      this.id = id;
  }

}
