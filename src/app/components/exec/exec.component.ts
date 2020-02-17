import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec',
  templateUrl: './exec.component.html',
  styleUrls: ['./exec.component.scss']
})
export class ExecComponent implements OnInit {
  team: Array<any> = [
    {position: "Consul (President)", name: "Daniel", image: "./assets/img/consul.jpg"},
    {position: "Pro Consul (Vice-President)", name: "Jeremy", image: "./assets/img/proconsul.jpg"},
    {position: "Recruitment Chair", name: "Eric", image: "./assets/img/recruitment.jpg"},
    {position: "Risk Manager", name: "Amer", image: "./assets/img/risk.jpg"},
    {position: "Annotator (Secretary)", name: "Brian", image: "./assets/img/annotator.jpg"},
    {position: "Tribune (Alumni Relations Chair)", name: "Matthew", image: "./assets/img/tribune.jpg"},
    {position: "Quaestor (Treasurer)", name: "Leo", image: "./assets/img/quaestor.jpg"},
    {position: "Magister (Pledge Educator)", name: "Ethan", image: "./assets/img/magister.jpg"},
    {position: "Philanthropy Chair", name: "Nick", image: "./assets/img/philanthropy.jpg"},
    {position: "Social Chair", name: "Jeremy", image: "./assets/img/social.jpg"},
    {position: "Brotherhood Chair", name: "Chad", image: "./assets/img/brotherhood.jpg"},
    {position: "Scholarship Chair", name: "Christian", image: "./assets/img/scholarship.jpg"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
