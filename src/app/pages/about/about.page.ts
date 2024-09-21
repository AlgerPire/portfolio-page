import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music';
import { Watch } from '@shared/components/watch/watch';
import {Icon} from "@shared/components/icon/icon";
import {
  chevronUp,
  clock,
  holiday,
  learn,
  monitor,
  moon,
  search,
  site,
  site2,
  speed,
  story,
  sun,
  work
} from "@icon/regular.icon";

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
      desc: `With two years of hands-on experience, I have contributed to a  variety of projects predominantly using
       Spring Boot and Angular. My work has involved both enhancing and maintaining existing applications, as well as
        developing new projects from the ground up. I have experience in both monolithic and microservices architectures,
         and I’ve been responsible for implementing secure applications with Spring Security. Additionally, I have
         prepared applications for cloud deployment using Docker and Kubernetes, ensuring they are scalable and ready
          for modern cloud environments.`,
      icon: monitor
    },
    {
      title: 'Always Learning',
      desc: `My family and friends often refer to me as a workaholic, but I consider myself more of a self-development
      enthusiast. I’m always seeking opportunities to enhance my skills, whether by learning new tools and technologies
      or refining my existing knowledge with the latest methodologies. Coding has always been my passion, and I genuinely
      enjoy dedicating my time to it.`,
      icon: search
    },
    {
      title: 'How it started',
      desc: ` I have been fascinated by how computers work since the age of 10, and I wrote my first line of code at 13.
      By the time I was 15, I made the decision to attend a specialized high school focused on electronics and software
      development. Since then, I have consistently pursued learning and coding, transforming my ideas into real-world projects.`,
      icon: story
    },
    {
      title: 'On my off time',
      desc: `Outside of coding, I enjoy watching football and avidly support my favorite team, Real Madrid, in all their
      matches. I also like to stay active by walking, playing football, and watching a movie in cinema. `,
      icon: holiday
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
