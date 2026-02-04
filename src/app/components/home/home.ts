import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Header} from '../header/header';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
