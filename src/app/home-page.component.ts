import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, FlexLayoutModule],
  template: `
    <div class="homepage">
      <!-- Header -->
      <header class="header">
        <h1 class="site-title">PORTFOLIO</h1>
      </header>

      <!-- Project Cards -->
      <div class="projects">
        <div class="card" *ngFor="let project of projects" [routerLink]="project.route">
          <div class="card-image">
            <img [src]="project.image" [alt]="project.title" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="footer">
        <p>Hi! I'm Vijay. This is where I make stuff on the web. Obligatory links:</p>
        <div class="links">
          <a class="button" href="mailto:vijayreddy18399@gmail.com">
             <i class="fa fa-envelope" aria-hidden="true"></i>
              Mail
           </a>
          <a class="button" href="https://github.com/vijay18399" target="_blank">
          <i class="devicon-github-original colored"></i>
          Github
          </a>
          <a class="button" href="https://www.linkedin.com/in/vijay18399/" target="_blank">
          <i class="devicon-linkedin-plain colored"></i>
            Linked In
          </a>
        </div>
      </footer>
    </div>
  `,
  styles: [
    `
      .homepage {
        text-align: center;
        padding: 15px;
        color: #333;
        height: 100%;
        overflow-y: auto;
      }

      .header {
        margin-bottom: 30px;
      }

      .site-title {
        font-size: 2rem;
        margin: 0;
        font-family: fantasy;
        color: #111;
      }

      .projects {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
      }

      .card {
        background: #fff;
        border: 2px solid #424242;
        border-radius: 12px;
        width: 280px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
      }
      .card-image img {
        width: 280px;
        height: 140px;
        border-radius: 12px;

      }

      .card-title {
        margin-top: 10px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #000;
      }

      /* Footer */
      .footer {
        margin-top: 50px;
        font-size: 0.9rem;
        color: #555;
      }

      .links {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        gap: 10px;
      }

      .button {
        border: 1px solid #000;
        border-radius: 12px;
        padding: 10px 18px 8px 12px;
        display: flex;
        align-items: center;
        color: #000;
        text-decoration: none;
        cursor: pointer;
      }

      .button i{
        margin-right: 10px;
      }

      .footer a {
        color: #555;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .footer a:hover {
        color: #000;
      }

    `,
  ],
})
export class HomeComponent {
  projects = [
    {
      title: 'Spell Bee Game',
      route: '/spell-bee',
      image: 'images/spell-bee2.jpg',
    },
    {
      title: 'Dictionary',
      route: '/dictionary',
      image: 'images/4.png',
    },
    {
      title: 'Whiteboard',
      route: '/whiteboard',
      image: 'images/5.png',
    }
  ];
}
