import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  title: string = "Duyurular";
  announcementList: Announcement[] = [
    {
      title: "aaadfsdgsfaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      url: "jjjjjjjjjjj"
    },
    {
      title: "aaaaaadjfdadnajkdpknaoKPDAOPDNOPAefhfdaaaaaaav",
      url: "jjjjjjjjjjj"
    },
    {
      title: "aaaaaaaaaaaa",
      url: "jjjjjjjjjjj"
    },
    {
      title: "aaaaaaaaaaaa",
      url: "jjjjjjjjjjj"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

//temp class
interface Announcement {
  title: string;
  url: string;
}
