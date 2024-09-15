import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music';
import { Watch } from '@shared/components/watch/watch';
import {Icon} from "@shared/components/icon/icon";
import {chevronUp, clock, learn, moon, search, site, site2, speed, sun} from "@icon/regular.icon";

@Component({
  selector: 'about',
  template: `
    <section class="container mx-auto flex flex-col gap-16 dark:text-gray-200 overflow-y-hidden">
      <!-- About Section -->
      <div class="flex flex-col gap-5">
        <h1 class="text-3xl font-bold dark:text-white text-center">About Me</h1>
        <p class="text-lg">
          My name is <span class="font-semibold">Alger Pire</span>, and I'm a software developer with
          over <b>2 years</b> of experience. I specialize in <b>Java</b> and <b>Spring Boot</b>,
          with additional expertise in front-end development using <b>Angular/TypeScript</b>. 🚀
        </p>
        <div *ngFor="let detail of aboutDetails" class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <div class="flex flex-col gap-3 text-center">
            <icon [path]="detail.icon" [size]="30" class="mx-auto"/>
            <span class="text-xl font-semibold dark:text-white">{{ detail.title }}</span>
            <span class="text-gray-800 dark:text-gray-300">{{ detail.desc }}</span>
          </div>
        </div>
      </div>

      <!-- Contact Information Section -->
      <div class="flex flex-col gap-5">
        <h2 class="text-2xl font-bold dark:text-white">Contact Information</h2>
        <div *ngFor="let contact of contactInfo" class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <p>
            <b class="dark:text-white">{{contact.title}}:</b><br />
            <a [href]="contact.link" class="hover:underline" target="_blank">{{contact.desc}}</a>
          </p>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch, Icon],
  standalone: true
})
export class AboutPage {
  metaService = inject(MetaService);
  traktTvService = inject(TraktTvService);

  constructor() {
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
    );
  }

  public aboutDetails = [
    {
      title: 'What I Do',
      desc: `I've worked on a variety of projects, ranging from
      mobile apps and web development to optimizing performance, writing clean code, and emphasizing good design
      principles. I take pride in my attention to detail and commitment to creating efficient, well-designed solutions
      that meet both user needs and industry standards. I'm your go-to person for JavaScript frameworks and ensuring
      the overall quality of software development projects.`,
      icon: site
    },
    {
      title: 'Always Learning',
      desc: `I'm always eager to learn new things. Whether
      it's staying updated on the latest technologies or exploring different coding techniques, I enjoy expanding my
      knowledge to grow as a developer.`,
      icon: search
    },
    {
      title: 'Off-Duty Fun',
      desc: `During my off-duty hours, I find joy in coding, exploring new aspects of coding, and staying updated by reading
      the latest blogs on technology. I also enjoy playing games on my phone, watching videos, listening to popular
      songs, and taking refreshing walks outside. It's important for me to spend quality time with my family and
      friends.`,
      icon: clock
    },
    {
      title: 'Why I Code',
      desc: `I code because it allows me to turn ideas into
      reality. It's a creative outlet that lets me build useful and innovative solutions. Coding challenges me to
      solve problems and continuously improve my skills. Ultimately, it's my way of making a positive impact through
      technology.`,
      icon: speed
    }
  ];

  public contactInfo = [
    {
      title: 'Address',
      desc: 'Thoma Avrami Street, Tirana, Albania',
      link: '#'
    },
    {
      title: 'Mobile Number',
      desc: '+355 68 44 44 135',
      link: 'tel:+355684444135'
    },
    {
      title: 'Email',
      desc: 'algerpire0@gmail.com',
      link: 'mailto:algerpire0@gmail.com'
    }
  ];
}
