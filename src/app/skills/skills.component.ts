import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: any = {
    technologies: [{ name: "HTML, css ,Javascript", percent: 90, remark: 'excellent' }, { name: "Typescript", percent: 70, remark: 'good' }, { name: "Angular", percent: 90, remark: 'excellent' }, { name: "React", percent: 70, remark: 'excellent' }, { name: "Node.js,Python ", percent: 70, remark: 'very-good' }],
    tools: [{ name: "Git", percent: 90, remark: 'excellent' }, { name: "GitLab,GitHub", percent: 90, remark: 'excellent' }, { name: "Linux, Apache", percent: 70, remark: 'very-good' }, { name: "PgSql", percent: 90, remark: 'excellent' }, { name: "Robot Framework", percent: 50, remark: 'average' }],
    methodologies: [{ name: "Scrum", percent: 70, remark: 'very-good' }, { name: "Uml", percent: 90, remark: 'excellent' }, { name: "Disign Thinking", percent: 70, remark: 'good' }, { name: "TDD", percent: 90, remark: 'excellent' }, { name: "DevOps", percent: 50, remark: 'average' }]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    // this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}




