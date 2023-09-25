import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,RouterModule],
  template: `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styles: [`
  :host {
  --content-padding: 10px;
}
header {
  display: block;
  height: 60px;
  padding: var(--content-padding);
  box-shadow: 0px 5px 25px var(--shadow-color);
}
.content {
  padding: var(--content-padding);
}

  
  `],
})

export class AppComponent {
  title = 'Homes';
}
