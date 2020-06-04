import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exec',
  templateUrl: './exec.component.html',
  styleUrls: ['./exec.component.scss']
})
export class ExecComponent implements OnInit {
  team: Array<any> = [
    {position: "Consul (President)", name: "Jeremy", image: "./assets/img/consul.jpg"},
    {position: "Pro Consul (Vice-President)", name: "Christian", image: "./assets/img/proconsul.jpg"},
    {position: "Recruitment Chair", name: "Justin", image: "./assets/img/recruitment.jpg"},
    {position: "Risk Manager", name: "Alex", image: "./assets/img/risk.jpg"},
    {position: "Annotator (Secretary)", name: "Milos", image: "./assets/img/annotator.jpg"},
    {position: "Tribune (Alumni Relations Chair)", name: "Zak", image: "./assets/img/tribune.jpg"},
    {position: "Quaestor (Treasurer)", name: "Markus", image: "./assets/img/quaestor.jpg"},
    {position: "Magister (Pledge Educator)", name: "Daniel", image: "./assets/img/magister.jpg"},
    {position: "Philanthropy Chair", name: "Hamza", image: "./assets/img/philanthropy.jpg"},
    {position: "Social Chair", name: "Max", image: "./assets/img/social.jpg"},
    {position: "Brotherhood Chair", name: "Tom", image: "./assets/img/brotherhood.jpg"},
    {position: "Scholarship Chair", name: "Fei", image: "./assets/img/scholarship.jpg"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
