import { Component, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'use-page',
  standalone: true,
  imports: [Devicon, Logo, RouterLink],
  template: `<div>
  <h1 class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">Uses</h1>
  <form>
    <h2 class="dark:text-white">Test</h2>
    <input type="text">>
  </form>
  </div>`,
})
export class UsePage {
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `Uses - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Philippines. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'marc kevin flores',
        'marc kevin',
        'marckevinflores',
        'software engineer',
        'philippines',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }
  public github = github;
}
